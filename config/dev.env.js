'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 服务器地址
  BACK_BASE_URL: '""',
  PRODUCT_URL: '"http://192.168.1.2:3010/index.html"',
  YUXIN_URL: '"http://test.it919.com/api"'
})
