'use strict';

/** 
 * Alpha 
 *
 * @param	string
 * @return	bool
 */
exports.alpha = function( str ) {
	var regex = /^[a-zA-Z]+$/;	
	var status = regex.test( str );

	return status;
}
// --------------------------------------------------------------------

/**
 * Alpha-numeric
 *
 * @param	string
 * @return	bool
 */
exports.alpha_numeric = function( str ) {
	var regex = /^\w+$/;	
	var status = regex.test( str );

	return status;
}
// --------------------------------------------------------------------

/**
 * Greater than
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.greater_than = function( str, comparison ) {
	var status = false;
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
	var status = false;
	if ( !isNaN( str ) ) {
		if ( str >= comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Latitude
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.latitude = function( str ) {
	var status = false;
	if ( typeof str == 'number' ) {
		if ( str < -90 || str > 90 ) {
			status = false;
		}
		else {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Longitude
 *
 * @param	string
 * @param	int
 * @return	bool
 */
exports.longitude = function( str ) {
	var status = false;
	if ( typeof str == 'number' ) {
		if ( str < -180 || str > 180 ) {
			status = false;
		}
		else {
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
	var status = false;
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
	var status = false;
	if ( !isNaN( str ) ) {
		if ( str <= comparison ) {
			status = true;
		}
	}

	return status;
}
// --------------------------------------------------------------------

/**
 * Numeric
 *
 * @param	string
 * @return	bool
 */
exports.numeric = function( str ) {
	var regex = /^\d+$/;	
	var status = regex.test( str );

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
 * Validate URL
 *
 * @param	string
 * @return	bool
 */
exports.valid_url = function( str ) {
	var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
	var status = regex.test( str );

	return status;
}
// --------------------------------------------------------------------

/**
 * Performs a Regular Expression match test.
 *
 * @param	string
 * @param	string	regex
 * @return	bool
 */
exports.regex_match = function( str, comparison ) {
	var flags = comparison.replace( /.*\/([gimy]*)$/, '$1' );
	var pattern = comparison.replace( new RegExp( '^/(.*?)/' + flags + '$' ), '$1' );
	var regex = new RegExp( pattern, flags );
	var status = regex.test( str );

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
		case 'alpha':
			return 'The ' + name + ' field may only contain alphabetical characters. ';
		break;
		case 'alpha_numeric':
			return 'The ' + name + ' field may only contain alpha-numeric characters. ';
		break;
		case 'email':
			return 'The ' + name + ' field must contain a valid email address. ';
		break;
		case 'greater_than':
			return 'The ' + name + ' field must contain a number greater than ' + comparison + '. ';
		break;
		case 'greater_than_equal_to':
			return 'The ' + name + ' field must contain a number greater than or equal to ' + comparison + '. ';
		break;
		case 'latitude':
			return 'The ' + name + ' field must contain latitude values between -90 to 90 degrees inclusive. ';
		break;
		case 'longitude':
			return 'The ' + name + ' field must contain longitude values between -180 to 180 degrees inclusive. ';
		break;
		case 'less_than':
			return 'The ' + name + ' field must contain a number less than ' + comparison + '. ';
		break;
		case 'less_than_equal_to':
			return 'The ' + name + ' field must contain a number less than or equal to ' + comparison + '. ';
		break;
		case 'numeric':
			return 'The ' + name + ' field must contain only numbers. ';
		break;
		case 'ip_address':
			return 'The ' + name + ' field must contain a valid IP. ';
		break;
		case 'regex_match':
			return 'The ' + name + ' field is not in the correct format. ';
		break;
		case 'required':
			return 'The ' + name + ' field is required. ';
		break;
		case 'url':
			return 'The ' + name + ' field must contain a valid URL. ';
		break;
		default:
			return 'The ' + fn + ' rules unknown. ';
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
exports.fn = function( fn, string, comparison = '' ) {
	switch ( fn ) {
		case 'alpha':
			return ( ( !!string ) ? this.alpha( string ) : true);
		break;
		case 'alpha_numeric':
			return ( ( !!string ) ? this.alpha_numeric( string ) : true);
		break;
		case 'email':
			return ( ( !!string ) ? this.valid_email( string ) : true);
		break;
		case 'greater_than':
			return ( ( !!string ) ? this.greater_than( string, comparison ) : true);
		break;
		case 'greater_than_equal_to':
			return ( ( !!string ) ? this.greater_than_equal_to( string, comparison ) : true);
		break;
		case 'latitude':
			return ( ( !!string ) ? this.latitude( string ) : true);
		break;
		case 'longitude':
			return ( ( !!string ) ? this.longitude( string ) : true);
		break;
		case 'less_than':
			return ( ( !!string ) ? this.less_than( string, comparison ) : true);
		break;
		case 'less_than_equal_to':
			return ( ( !!string ) ? this.less_than_equal_to( string, comparison ) : true);
		break;
		case 'numeric':
			return ( ( !!string ) ? this.numeric( string ) : true);
		break;
		case 'ip_address':
			return ( ( !!string ) ? this.valid_ip( string ) : true);
		break;
		case 'regex_match':
			return ( ( !!string ) ? this.regex_match( string, comparison ) : true);
		break;
		case 'required':
			return this.required( string );
		break;
		case 'url':
			return ( ( !!string ) ? this.valid_url( string ) : true);
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

				setup.forEach( function( data ) {
					if ( !!data.rules ) {
						data.rules.split( '|' ).forEach( function( rule ) {
							var regexp = /\(([^)]+)\)/;
							var matches = regexp.exec( rule );
							if ( matches == null && rule != null ) {
								if ( exports.fn( rule, data.value, '' ) == false ) {
									result['error_lists'].push( 
										exports.error_message( rule, data.name, data.value, '' )
									);
									error_count++;
								}
							}
							else {
								var fn_split = String( rule.replace( matches[0], '' ) );
								var comparison = matches[1].split( ',' );
								if ( fn_split != null ) {
									if ( exports.fn( fn_split, data.value, comparison[0] ) == false ) {
										result['error_lists'].push( 
											exports.error_message( fn_split, data.name, data.value, comparison )
										);
										error_count++;
									}
								}
							}
						} );
					}
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

	return result;
}