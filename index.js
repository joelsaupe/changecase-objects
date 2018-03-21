'use strict'

var map = require('deep-map-keys')
var changeCase = require('change-case')

function convert (obj, caseFn, options) {
  return map(obj, function (key, val) {
    if (typeof caseFn !== 'function') {
      return key
    }

    // Check options
    if (typeof options === 'object') {
      // Return the default key if it's in the exclude list.
      if (Array.isArray(options.exclude) && options.exclude.indexOf(key) > -1) {
        return key
      }
    }

    return caseFn(key.replace(/[\/._-]+/g, ' '))
  })
}

module.exports = {
  camelCase: function (obj, options) { return convert(obj, changeCase.camelCase, options) },
  constantCase: function (obj, options) { return convert(obj, changeCase.constantCase, options) },
  dotCase: function (obj, options) { return convert(obj, changeCase.dotCase, options) },
  headerCase: function (obj, options) { return convert(obj, changeCase.headerCase, options) },
  kebabCase: function (obj, options) { return convert(obj, changeCase.paramCase, options) },
  lowerCase: function (obj, options) { return convert(obj, changeCase.lowerCase, options) },
  pascalCase: function (obj, options) { return convert(obj, changeCase.pascalCase, options) },
  pathCase: function (obj, options) { return convert(obj, changeCase.pathCase, options) },
  sentenceCase: function (obj, options) { return convert(obj, changeCase.sentenceCase, options) },
  snakeCase: function (obj, options) { return convert(obj, changeCase.snakeCase, options) },
  titleCase: function (obj, options) { return convert(obj, changeCase.titleCase, options) },
  upperCase: function (obj, options) { return convert(obj, changeCase.upperCase, options) },
  customCase: function (obj, fn, options) { return convert(obj, fn, options) }
}
