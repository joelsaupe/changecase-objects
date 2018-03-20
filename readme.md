# changecase-objects
## Convert an object's keys to different cases

## Install

```
$ npm install --save changecase-objects
```


## Usage

```js
var changeKeys = require('changecase-objects')

changeKeys.snakeCase({ fooBar: 'baz' })
// { foo_bar: 'baz' }

changeKeys.snakeCase({ 'foo-bar': true, nested: { fooBaz: 'bar' }})
// { foo_bar: true, nested: { foo_baz: 'bar' }}
```

## API

### `camelCase(obj)` -> `object`

Converts keys to a string with the separators denoted by having the next letter capitalized.

```
key name => keyName
```

##### obj

*Required*  
Type: `object`

An object to transform keys into camel case.

### `constantCase(obj)` -> `object`

Converts keys to upper case, with an underscore separator.

```
key name => KEY_NAME
```

##### obj

*Required*  
Type: `object`

An object to transform keys into constant case.

### `dotCase(obj)` -> `object`

Converts keys to lower case, with a period separator.

```
key name => key.name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into dot case.


### `headerCase(obj)` -> `object`

Converts keys to title case, with a dash separator.

```
key name => Key-Name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into header case.


### `kebabCase(obj)` -> `object`

Converts keys to lower case, with a dash separator.

```
key name => key-name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into kebab case.


### `lowerCase(obj)` -> `object`

Converts keys to lower case, with a space separator.

```
key name => key name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into lower case.


### `pascalCase(obj)` -> `object`

Converts keys to camel case, with the first character also capitalized.

```
key name => KeyName
```

##### obj

*Required*  
Type: `object`

An object to transform keys into pascal case.

### `pathCase(obj)` -> `object`

Converts keys to lower case, with a slash separator.

```
key name => key/name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into path case.

### `sentenceCase(obj)` -> `object`

Converts keys to lower case, with a space separator, with the first letter capitalized.

```
key name => Key name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into sentence case.


### `snakeCase(obj)` -> `object`

Converts keys to lower case, with an underscore separator.

```
key name => key_name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into snake case.


### `titleCase(obj)` -> `object`

Converts keys to lower case with the first letter of each word capitalized, with a space separator.

```
key name => Key Name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into title case.


### `upperCase(obj)` -> `object`

Converts keys to upper case, with a space separator.

```
key name => KEY NAME
```

##### obj

*Required*  
Type: `object`

An object to transform keys into upper case.


### `customCase(obj, caseFn)` -> `object`

Allows for custom casing rules by converting keys according to given function.

```
key name => key name
```

##### obj

*Required*  
Type: `object`

An object to transform keys into custom case.

##### caseFn

*Required*  
Type: `function`

A function that is passed a key as a parameter, and should return the modified key value.
