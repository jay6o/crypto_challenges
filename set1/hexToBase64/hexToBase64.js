const { Buffer } = require("node:buffer");

/**
 * 	Main method; Base64 encodes a hex string.
 * 
 * 	@param hexString The hex string to encode
 * 	@returns The Base64 encoded string
 */
main = (hexString) => {
	hex = Buffer.from(hexString, 'hex'); // Create the buffer with the hex data
	return hex.toString('base64'); // Output the buffer in base64 format
}

module.exports = main;
