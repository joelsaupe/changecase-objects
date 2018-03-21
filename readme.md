# changecase-objects
## Convert an object's keys to different cases

### Installation

```
$ npm install --save changecase-objects
```


### Usage

``` javascript
var changeKeys = require('changecase-objects')

changeKeys.snakeCase({ fooBar: 'baz' })
// returns { foo_bar: 'baz' }

changeKeys.snakeCase({ 'foo-bar': true, nested: { fooBaz: 'bar' }})
// returns { foo_bar: true, nested: { foo_baz: 'bar' }}
```

or with imports

``` javascript
import { snakeCase } from 'changecase-objects'

snakeCase({ fooBar: 'baz' })
// returns { foo_bar: 'baz' }

snakeCase({ 'foo-bar': true, nested: { fooBaz: 'bar' }})
// returns { foo_bar: true, nested: { foo_baz: 'bar' }}
```

### API

#### Extra Options

Every function accepts an optional options object. The following options are currently supported:

| Name        | Type            | Description                                      |
|-------------|-----------------|--------------------------------------------------|
| exclude     | `array<string>` | Array of key values to exclude from case change. |

##### exclude
``` javascript
camelCase({ foo_bar: 'baz', 'filters[foo_bar]': 'val' }, { exclude: ['filters[foo_bar]'] })
// returns { fooBar: 'baz', 'filters[foo_bar]': 'val' }
```

-----------------

#### camelCase
`camelCase(obj, [options]) -> Object`

Converts keys to a string with the separators denoted by having the next letter capitalized.

``` javascript
camelCase({ 'key name': 'val' })
// returns { keyName: 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into camel case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### CONSTANT_CASE
`constantCase(obj, [options]) -> Object`

Converts keys to upper case, with an underscore separator.

``` javascript
constantCase({ 'key name': 'val' })
// returns { KEY_NAME: 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into constant case.  |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### dot.case
`dotCase(obj, [options]) -> Object`

Converts keys to lower case, with a period separator.

``` javascript
dotCase({ 'key name': 'val' })
// returns { 'key.name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into dot case.       |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### Header-Case
`headerCase(obj, [options]) -> Object`

Converts keys to title case, with a dash separator.

``` javascript
headerCase({ 'key name': 'val' })
// returns { 'Key-Name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into header case.    |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### kebab-case
`kebabCase(obj, [options]) -> Object`

Converts keys to lower case, with a dash separator.

``` javascript
kebabCase({ 'key name': 'val' })
// returns { 'key-name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into kebab case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### lower case
`lowerCase(obj, [options]) -> Object`

Converts keys to lower case, with a space separator.

``` javascript
lowerCase({ 'Key Name': 'val' })
// returns { 'key name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into lower case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### PascalCase
`pascalCase(obj, [options]) -> Object`

Converts keys to camel case, with the first character also capitalized.

``` javascript
pascalCase({ 'key name': 'val' })
// returns { KeyName: 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into pascal case.    |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### path/case
`pathCase(obj, [options]) -> Object`

Converts keys to lower case, with a slash separator.

``` javascript
pathCase({ 'key name': 'val' })
// returns { 'key/name': 'val' })
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into path case.      |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### Sentence case
`sentenceCase(obj, [options]) -> Object`

Converts keys to lower case, with a space separator, with the first letter capitalized.

``` javascript
sentenceCase({ 'key name': 'val' })
// returns { 'Key name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into sentence case.  |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### snake_case
`snakeCase(obj, [options]) -> Object`

Converts keys to lower case, with an underscore separator.

``` javascript
snakeCase({ 'key name': 'val' })
// returns { key_name: 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into snake case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### Title Case
`titleCase(obj, [options]) -> Object`

Converts keys to lower case with the first letter of each word capitalized, with a space separator.

``` javascript
titleCase({ 'key name': 'val' })
// returns { 'Key Name': 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into title case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### UPPER CASE
`upperCase(obj, [options]) -> Object`

Converts keys to upper case, with a space separator.

``` javascript
upperCase({ 'key name': 'val' })
// returns { 'KEY NAME: 'val' }
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into upper case.     |
| options     | `Object`                    | No       | [see options](#options)                          |

-----------------

#### -cUsToM-cAsE-
`customCase(obj, caseFn, [options]) -> Object`

Allows for custom casing rules by converting keys according to given function.

``` javascript
customCase({ 'key name': 'val' }, key => transform(key))
// returns keys formatted by `caseFn`
```

##### Parameters

| Name        | Type                        | Required | Description                                      |
|-------------|-----------------------------|----------|--------------------------------------------------|
| obj         | `Object` or `array<Object>` | Yes      | An object to transform keys into upper case.     |
| caseFn      | `function(string) -> string`| Yes      | A function that returns a modified key.          |
| options     | `Object`                    | No       | [see options](#options)                          |
