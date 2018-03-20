'use strict'

var map = require('deep-map-keys')
var changeCase = require('change-case')

function convert (obj, caseFn) {
  return map(obj, function (key, val) {
    if (typeof caseFn !== 'function') {
      return key
    }

    return caseFn(key.replace(/[\/._-]+/g, ' '))
  })
}

module.exports = {
  camelCase: function (obj) { return convert(obj, changeCase.camelCase) },
  constantCase: function (obj) { return convert(obj, changeCase.constantCase) },
  dotCase: function (obj) { return convert(obj, changeCase.dotCase) },
  headerCase: function (obj) { return convert(obj, changeCase.headerCase) },
  kebabCase: function (obj) { return convert(obj, changeCase.paramCase) },
  lowerCase: function (obj) { return convert(obj, changeCase.lowerCase) },
  pascalCase: function (obj) { return convert(obj, changeCase.pascalCase) },
  pathCase: function (obj) { return convert(obj, changeCase.pathCase) },
  sentenceCase: function (obj) { return convert(obj, changeCase.sentenceCase) },
  snakeCase: function (obj) { return convert(obj, changeCase.snakeCase) },
  titleCase: function (obj) { return convert(obj, changeCase.titleCase) },
  upperCase: function (obj) { return convert(obj, changeCase.upperCase) },
  customCase: function (obj, fn) { return convert(obj, fn) }
}
