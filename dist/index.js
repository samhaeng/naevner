
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./naevner.js.cjs.production.min.js')
} else {
  module.exports = require('./naevner.js.cjs.development.js')
}
