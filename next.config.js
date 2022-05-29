/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require('./framework/common/config')

const withImages = require('next-images')

module.exports =
  withFrameworkConfig(
    withImages({
      framework: {
        name: process.env.NEXT_PUBLIC_FRAMEWORK
      },
      esModule: true
    }
  )
)
