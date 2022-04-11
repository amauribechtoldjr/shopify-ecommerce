const merge = require('deepmerge')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const SHOPIFY_FW = 'shopify'
const BIGCOMMERCE = 'bigcommerce'
const SHOPIFY_LOCAL = 'shopify_local'

const ALLOWED_FW = [SHOPIFY_FW, BIGCOMMERCE, SHOPIFY_LOCAL]
const DEFAULT_FW = SHOPIFY_FW

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name

  if (!framework) {
    throw new Error(
      'API framework name is missing, please add a valid provider.'
    )
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(`
      API framework '${framework}' cannot be found,
      please use a valid framework of the list: ${ALLOWED_FW.join(', ')}
    `)
  }

  if (framework === SHOPIFY_LOCAL) {
    framework = DEFAULT_FW
  }

  const frameworkNextConfig = require(path.join(
    '../',
    framework,
    'next.config'
  ))

  const config = merge(defaultConfig, frameworkNextConfig)

  const tsPath = path.join(process.cwd(), 'tsconfig.json')
  const tsConfig = require(tsPath)

  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`]
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`]

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: 'json' })
  )

  return config
}

module.exports = { withFrameworkConfig }
