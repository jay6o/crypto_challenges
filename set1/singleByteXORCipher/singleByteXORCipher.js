const { Buffer } = require("node:buffer");
const getBookCharacterFrequencies = require("./helpers/getBookCharacterFrequencies.js");
const scoreEnglish = require("./helpers/scoreEnglish.js");

singleByteXORCipher = (hex1, key) => {
	const inputBuffer = Buffer.from(hex1, 'hex');
	const keyBuffer = Buffer.from(key.toString(10));
	let result = Buffer.alloc(inputBuffer.length);
	for (let i = 0; i < inputBuffer.length; i++) {
		result[i] = inputBuffer[i] ^ parseInt(keyBuffer.toString());
	}
	return result.toString('utf8');
}

main = (encoded) => {
	let possible = [];
	const bookCharacterFrequencies = getBookCharacterFrequencies("./assets/The_Odyssey.txt");
	for (let i = 0; i < 256; i++) {
		const curr = singleByteXORCipher(encoded, i);
		const score = scoreEnglish(curr, bookCharacterFrequencies);
		possible.push({
			"decoded": curr,
			"key": i,
			"score": score
		});
	}
	possible.sort((a, b) => b.score - a.score);
	console.log("Top 10 results by frequency scoring: ");
	for (let i = 0; i < 10; i++) {
		console.log(`${i + 1}: `, possible[i].decoded);
	}
}

// main("1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736"); // Returns "Cooking MC's like a pound of bacon" for the top result

module.exports = singleByteXORCipher;
