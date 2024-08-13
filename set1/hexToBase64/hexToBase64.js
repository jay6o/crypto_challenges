const { Buffer } = require("node:buffer");

main = (hexString) => {
	hex = Buffer.from(hexString, 'hex'); // Create the buffer with the hex data
	return hex.toString('base64'); // Output the buffer in base64 format
}

module.exports = main;
