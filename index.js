/**
 * Greater than
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.greater_than = function( str, comparison ) {
	status = false;
	if ( !isNaN( str ) ) {
		if ( str > comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Equal to or Greater than
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.greater_than_equal_to = function( str, comparison ) {
	status = false;
	if ( !isNaN( str ) ) {
		if ( str >= comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Less than
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.less_than = function( str, comparison ) {
	status = false;
	if ( !isNaN( str ) ) {
		if ( str < comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Equal to or Greater than
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.less_than_equal_to = function( str, comparison ) {
	status = false;
	if ( !isNaN( str ) ) {
		if ( str <= comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Valid Email
 *
 * @param	string
 * @return	bool
 */
exports.valid_email = function( str ) {
	var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var status = regex.test( str );

	return status;
}
// --------------------------------------------------------------------

/**
 * Validate IP Address
 *
 * @param	string
 * @param	string	'ipv4' or 'ipv6' to validate a specific IP format
 * @return	bool
 */
exports.valid_ip = function( str ) {
	var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	var status = false;

	if ( str.match( regex ) != null ) {
		status = true;
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Required
 *
 * @param	string
 * @return	bool
 */
exports.required = function( str ) {
	if ( !!str ) {
		return true;
	}
	else {
		return false;
	}
}
// --------------------------------------------------------------------

/**
 * Error Message
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.error_message = function( fn, name, string, comparison = '' ) {
	switch ( fn ) {
		case 'ip_address':
			return 'The ' + name + ' field must contain a valid IP. ';
		break;
		case 'email':
			return 'The ' + name + ' field must contain a valid email address. ';
		break;
		case 'required':
			return 'The ' + name + ' field is required.';
		break;
		default:
			return fn + ' rules unknown.';
		break;
	}
}
// --------------------------------------------------------------------

/**
 * Set Function
 *
 * @param	string
 * @param	int
 * @return	function
 */
exports.fn = function( fnc, string, comparison = '' ) {
	switch ( fnc ) {
		case 'ip_address':
			return ( ( !!string ) ? this.valid_ip( string ) : true);
		break;
		case 'email':
			return ( ( !!string ) ? this.valid_email( string ) : true);
		break;
		case 'required':
			return this.required( string );
		break;
		default:
			return false;
		break;
	}
}
// --------------------------------------------------------------------

/**
 * Run Validation
 *
 * @param	array
 * @return	array
 */
exports.run = function( setup ) {

	var result = [];
		result['status'] = false;
		result['message'] = '';
		result['error_lists'] = []
	var error_count = 0;

	if ( typeof setup === 'object' ) {
		if ( setup ) {
			if ( setup.length > 0 ) {
				result['message'] = 'Unfortunately, some error has occured.';
				
				var j = 0;
				setup.forEach( function( data ) {
					if ( !!data.rules ) {
						var i = 0;
						data.rules.split( '|' ).forEach( function( rule ) {
							var regexp = /\(([^)]+)\)/;
							var matches = regexp.exec( rule );

							if ( matches == null ) {
								if ( exports.fn( rule, data.value, '' ) == false ) {
									result['error_lists'].push( 
										exports.error_message( rule, data.name, data.value, '' )
									);
									error_count++;
								}
							}
							else {
								
								console.log( i + ' Hehe' );
								var string_with_replace = String( rule.replace( matches[0], '' ) );
								//string_with_replace = string_with_replace.replace( '(undefined)' );
								console.log( i + ' Array' );
								console.log( 'Function name: ' + string_with_replace );
								console.log( 'Data: ', matches[1].split( ',' ) );
							}

							i++;
						} );
					}
					j++;
				} );

				if ( error_count == 0 ) {
					result['status'] = true;
					result['message'] = 'Validated.';
				}
			}
			else {
				result['message'] = 'Validaton setup is empty';
			}
		}
	}
	else {
		result['message'] = 'Validaton setup is not object';
	}

	console.log( result );
	return result;
}