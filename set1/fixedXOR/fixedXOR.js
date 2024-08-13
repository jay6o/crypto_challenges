const { Buffer } = require("node:buffer");

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
