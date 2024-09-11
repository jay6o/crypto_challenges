/**
 * 	Encrypts a string by using a single key and repeating-key XOR.
 * 
 * 	@param input The message to encrypt
 * 	@param key The key to implement repeating-key XOR with
 * 	@returns The encrypted message
 */
repeatingKeyXOR = (input, key) => {
	const inputBuffer = Buffer.from(input, "utf8");
	const keyBuffer = Buffer.from(key, "utf8");
	let result = Buffer.alloc(inputBuffer.length);
	let curr = 0;
	for (let i = 0; i < inputBuffer.length; i++) {
		if (keyBuffer[curr] === undefined) curr = 0;
		result[i] = inputBuffer[i] ^ keyBuffer[curr];
		curr++;
	}
	return result.toString('hex');
};

module.exports = repeatingKeyXOR;
