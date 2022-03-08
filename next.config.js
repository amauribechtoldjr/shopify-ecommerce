/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require('./framework/common/config')

const withImages = require('next-images')

module.exports =
  withFrameworkConfig(
    withImages({
      esModule: true
    }
  )
)

console.log('sadfadsfasdf', JSON.stringify(module.exports, null, 2))
