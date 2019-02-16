# Ferds Validator

Ferds Validator is a simple validator that is intended for processing data validation in a concise manner. Ferds Validator has several advantages over other packages, such as:

* Use only one variable to perform various validations
* Validation looks more familiar to those of you who are accustomed to using the PHP programming language with the CodeIgniter and Laravel framework

## Features

Now, let’s describe the features:

- Check for required data.
- Simple basic validation rules
- Verify that the data is of the correct type, and meets the correct criteria. For example, if a username is submitted it must be validated to contain only permitted characters. It must be of a minimum length, and not exceed a maximum length. Etc.

## Installation
```
$ npm install ferds-validator
```
## Usages

### Basic validation usage

Examples of simple use :

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

Raw output :

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

### Simple usage with Express

Examples of simple use with express :

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


## Rule Reference

The following is a list of all the native rules that are available to use:

| Rule | Parameter | Description | Examples |
| ------------- |:-------------:|:-------------:|:-------------:|
| alpha | No | Returns FALSE if the form element contains anything other than alphabetical characters. | |
| alpha_numeric | No | Returns FALSE if the form element contains anything other than alpha-numeric characters. | |
| email | No | Returns FALSE if the form element does not contain a valid email address. | |
| greater_than | Yes | Returns FALSE if the form element is less than or equal to the parameter value or not numeric. | greater_than(10) |
| greater_than_equal_to | Yes | Returns FALSE if the form element is less than the parameter value, or not numeric. | greater_than_equal_to(243) |
| latitude | No | Returns FALSE if the form element is values doesn't between -90 to 90 degrees. | |
| longitude | No | Returns FALSE if the form element is values doesn't between -180 to 180 degrees. | |
| less_than | Yes | Returns FALSE if the form element is greater than or equal to the parameter value or not numeric. | less_than(10) |
| less_than_equal_to | Yes | Returns FALSE if the form element is greater than the parameter value, or not numeric. | less_than_equal_to(243) |






