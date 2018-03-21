'use strict'

var test = require('tape')
var keyChange = require('./')

var unformattedObj = {
  'foo.bar': 'baz',
  'child-ren_obj': {
    obj_key: 'val',
    nest_ed: [{
      k_ey: 'val'
    }]
  },
  'chil ren array': [{
    obj_key: 'Val',
    obj_array: [
      {
        test_val: 'val'
      }
    ]
  }]
}

test('camelCase', function (t) {
  var expected = {
    fooBar: 'baz',
    childRenObj: {
      objKey: 'val',
      nestEd: [{
        kEy: 'val'
      }]
    },
    chilRenArray: [{
      objKey: 'Val',
      objArray: [
        {
          testVal: 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.camelCase(unformattedObj), expected)
  t.deepEqual(keyChange.camelCase([unformattedObj]), [expected])
  t.end()
})

test('CONSTANT_CASE', function (t) {
  var expected = {
    FOO_BAR: 'baz',
    CHILD_REN_OBJ: {
      OBJ_KEY: 'val',
      NEST_ED: [{
        K_EY: 'val'
      }]
    },
    CHIL_REN_ARRAY: [{
      OBJ_KEY: 'Val',
      OBJ_ARRAY: [
        {
          TEST_VAL: 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.constantCase(unformattedObj), expected)
  t.deepEqual(keyChange.constantCase([unformattedObj]), [expected])
  t.end()
})

test('dot.case', function (t) {
  var expected = {
    'foo.bar': 'baz',
    'child.ren.obj': {
      'obj.key': 'val',
      'nest.ed': [{
        'k.ey': 'val'
      }]
    },
    'chil.ren.array': [{
      'obj.key': 'Val',
      'obj.array': [
        {
          'test.val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.dotCase(unformattedObj), expected)
  t.deepEqual(keyChange.dotCase([unformattedObj]), [expected])
  t.end()
})

test('Header-Case', function (t) {
  var expected = {
    'Foo-Bar': 'baz',
    'Child-Ren-Obj': {
      'Obj-Key': 'val',
      'Nest-Ed': [{
        'K-Ey': 'val'
      }]
    },
    'Chil-Ren-Array': [{
      'Obj-Key': 'Val',
      'Obj-Array': [
        {
          'Test-Val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.headerCase(unformattedObj), expected)
  t.deepEqual(keyChange.headerCase([unformattedObj]), [expected])
  t.end()
})

test('kebab-case', function (t) {
  var expected = {
    'foo-bar': 'baz',
    'child-ren-obj': {
      'obj-key': 'val',
      'nest-ed': [{
        'k-ey': 'val'
      }]
    },
    'chil-ren-array': [{
      'obj-key': 'Val',
      'obj-array': [
        {
          'test-val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.kebabCase(unformattedObj), expected)
  t.deepEqual(keyChange.kebabCase([unformattedObj]), [expected])
  t.end()
})

test('lower case', function (t) {
  var expected = {
    'foo bar': 'baz',
    'child ren obj': {
      'obj key': 'val',
      'nest ed': [{
        'k ey': 'val'
      }]
    },
    'chil ren array': [{
      'obj key': 'Val',
      'obj array': [
        {
          'test val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.lowerCase(unformattedObj), expected)
  t.deepEqual(keyChange.lowerCase([unformattedObj]), [expected])
  t.end()
})

test('PascalCase', function (t) {
  var expected = {
    'FooBar': 'baz',
    'ChildRenObj': {
      'ObjKey': 'val',
      'NestEd': [{
        'KEy': 'val'
      }]
    },
    'ChilRenArray': [{
      'ObjKey': 'Val',
      'ObjArray': [
        {
          'TestVal': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.pascalCase(unformattedObj), expected)
  t.deepEqual(keyChange.pascalCase([unformattedObj]), [expected])
  t.end()
})

test('path/case', function (t) {
  var expected = {
    'foo/bar': 'baz',
    'child/ren/obj': {
      'obj/key': 'val',
      'nest/ed': [{
        'k/ey': 'val'
      }]
    },
    'chil/ren/array': [{
      'obj/key': 'Val',
      'obj/array': [
        {
          'test/val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.pathCase(unformattedObj), expected)
  t.deepEqual(keyChange.pathCase([unformattedObj]), [expected])
  t.end()
})

test('Sentence case', function (t) {
  var expected = {
    'Foo bar': 'baz',
    'Child ren obj': {
      'Obj key': 'val',
      'Nest ed': [{
        'K ey': 'val'
      }]
    },
    'Chil ren array': [{
      'Obj key': 'Val',
      'Obj array': [
        {
          'Test val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.sentenceCase(unformattedObj), expected)
  t.deepEqual(keyChange.sentenceCase([unformattedObj]), [expected])
  t.end()
})

test('snake_case', function (t) {
  var expected = {
    'foo_bar': 'baz',
    'child_ren_obj': {
      'obj_key': 'val',
      'nest_ed': [{
        'k_ey': 'val'
      }]
    },
    'chil_ren_array': [{
      'obj_key': 'Val',
      'obj_array': [
        {
          'test_val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.snakeCase(unformattedObj), expected)
  t.deepEqual(keyChange.snakeCase([unformattedObj]), [expected])
  t.end()
})

test('Title Case', function (t) {
  var expected = {
    'Foo Bar': 'baz',
    'Child Ren Obj': {
      'Obj Key': 'val',
      'Nest Ed': [{
        'K Ey': 'val'
      }]
    },
    'Chil Ren Array': [{
      'Obj Key': 'Val',
      'Obj Array': [
        {
          'Test Val': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.titleCase(unformattedObj), expected)
  t.deepEqual(keyChange.titleCase([unformattedObj]), [expected])
  t.end()
})

test('UPPER CASE', function (t) {
  var expected = {
    'FOO BAR': 'baz',
    'CHILD REN OBJ': {
      'OBJ KEY': 'val',
      'NEST ED': [{
        'K EY': 'val'
      }]
    },
    'CHIL REN ARRAY': [{
      'OBJ KEY': 'Val',
      'OBJ ARRAY': [
        {
          'TEST VAL': 'val'
        }
      ]
    }]
  }

  t.deepEqual(keyChange.upperCase(unformattedObj), expected)
  t.deepEqual(keyChange.upperCase([unformattedObj]), [expected])
  t.end()
})

test('__custom_case__', function (t) {
  var expected = {
    '__foo_bar__': 'baz',
    '__child_ren_obj__': {
      '__obj_key__': 'val',
      '__nest_ed__': [{
        '__k_ey__': 'val'
      }]
    },
    '__chil_ren_array__': [{
      '__obj_key__': 'Val',
      '__obj_array__': [
        {
          '__test_val__': 'val'
        }
      ]
    }]
  }

  var customConverter = function (key) {
    return (isNaN(+key)) ? ('__' + key.replace(/ /g, '_') + '__') : key
  }

  t.deepEqual(keyChange.customCase(unformattedObj, customConverter), expected)
  t.deepEqual(keyChange.customCase([unformattedObj], customConverter), [expected])
  t.end()
})

test('options.exclude', function (t) {
  var unformatted = {
    test_key: 'val',
    'filters[test_key]': {
      'nested_key': 'val'
    },
    'filters[array_of_values]': [{
      'nested_key_name': 'val'
    }]
  }
  var expected = {
    testKey: 'val',
    'filters[test_key]': {
      nestedKey: 'val'
    },
    'filters[array_of_values]': [{
      nestedKeyName: 'val'
    }]
  }

  var exclude = ['filters[test_key]', 'filters[array_of_values]']

  t.deepEqual(keyChange.camelCase(unformatted, { exclude: exclude }), expected)
  t.deepEqual(keyChange.camelCase([unformatted], { exclude: exclude }), [expected])
  t.end()
})
