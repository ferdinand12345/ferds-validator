# Ferds Validator

## Features

Now, let’s describe the ideal features:

- Check for required data.
- Simple basic validation rules
- Verify that the data is of the correct type, and meets the correct criteria. For example, if a username is submitted it must be validated to contain only permitted characters. It must be of a minimum length, and not exceed a maximum length. Etc.

## Installation

$ npm install ferds-validator

## Usages

### Simple validation usage

Examples of simple use

```javascript
var validator = require( 'ferds-validator' );
var setup = [
	{
		"name": "Alpha Only", // field description
		"value": "ABC", // value that will be validated
		"rules": "alpha" // validate alphabet characters only
	},
	{
		"name": "Required Alpha Only",
		"value": "",
		"rules": "required|alpha"
	},
	{
		"name": "Age",
		"value": 25,
		"rules": "required|numeric|greater_than_equal_to(30)" // Return false, because the value must be greater or equal to 30
	}
}
var run_validator = validator.run( setup ); // Set to variable
console.log( run_validator ); // Raw output

if ( run_validator.status == false ) {
	// your code...
}
else {
	// your code...
}
```

### Output validation
```json
{
	"status": false,
	"message": "Unfortunately, some error has occured.",
	"error_lists": [
		"The Required Alpha Only field is required. ",
		"The Age field must contain a number greater than or equal to 30. "
	]
}
```

## Rule Reference

The following is a list of all the native rules that are available to use:
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

**NOTE:** _Since version 0.8.0 node does not contain node-waf anymore. The node-zlib package which node-rest-client make use of, depends on node-waf.Fortunately since version 0.8.0 zlib is a core dependency of node, so since version 1.0 of node-rest-client the explicit dependency to "zlib" has been removed from package.json. therefore if you are using a version below 0.8.0 of node please use a versión below 1.0.0 of "node-rest-client". _ 
