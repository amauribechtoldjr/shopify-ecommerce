/** @type {import('next').NextConfig} */

const withImages = require('next-images')

module.exports = withImages({
  esModule: true
})

console.log('sadfadsfasdf', JSON.stringify(module.exports, null, 2))
