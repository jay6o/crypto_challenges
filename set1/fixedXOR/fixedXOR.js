const { Buffer } = require("node:buffer");

/**
 *	Takes 2 equal-length buffers and produces their XOR combination.
 *
 *	@param buffer1 One of the buffers to use for the encryption
 *	@param buffer2 The other buffer to use for the encryption
 * 	@returns The hex-string representation of the fixed XOR encrypted output
 */
fixedXOR = (buffer1, buffer2) => {
	b1 = Buffer.from(buffer1, "hex");
	b2 = Buffer.from(buffer2, "hex");
	result = Buffer.alloc(b1.length);
	for (let i = 0; i < b1.length; i++) {
		result[i] = b1[i] ^ b2[i];
	}
	return (result.toString('hex'))
}

module.exports = fixedXOR;
