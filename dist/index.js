
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./naevner.cjs.production.min.js')
} else {
  module.exports = require('./naevner.cjs.development.js')
}
