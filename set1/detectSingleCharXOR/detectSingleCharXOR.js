const singleByteXOR = require("../singleByteXORCipher/singleByteXORCipher.js");
const getBookCharacterFrequencies = require("../singleByteXORCipher/helpers/getBookCharacterFrequencies.js");
const getMessageCharacterFrequencies = require("../singleByteXORCipher/helpers/getMessageCharacterFrequencies.js");
const Frequencies = require("../singleByteXORCipher/helpers/frequenciesObject.js");
const fs = require("fs");
const readline = require("node:readline");

/**
 * 	Can detect the decrypted message in a list of single-character (byte) XOR encrypted messages.
 * 
 * @param englishBook The English book to use as the baseline score to compare with
 * @param encryptedFile The list of encrypted messages to try and decrypt
 */
const detectSingleCharXOR = async (englishBook, encryptedFile) => {
	const bookCharFrequencies = getBookCharacterFrequencies(englishBook);
	const encryptedList = fs.createReadStream(encryptedFile, "utf8");
	const rl = readline.createInterface({ input: encryptedList, crlfDelay: Infinity });
	let possible = [];
	for await (let line of rl) { // for line of hex encoded strings list
		for (let i = 0; i < 256; i++) { // for every possible character / byte
			const decodedString = singleByteXOR(line, i);
			let decodedCharacterFrequencies = getMessageCharacterFrequencies(decodedString);
			let score = 0;
			for (let key in decodedCharacterFrequencies) {
				decodedCharacterFrequencies[key] -= bookCharFrequencies[key];
				score += decodedCharacterFrequencies[key];
			};
			possible.push({
				"message": decodedString,
				"score": score,
				"key": "'" + Buffer.from(parseInt(i).toString(10), "hex").toString() + "'"
			});
		};
	};

	// Sort by highest score
	possible.sort((a, b) => b.score - a.score);

	// Output the top 10
	console.log("Top 10 possibilities");
	for (let i = 0; i < 10; i++) {
		console.log(`${i + 1}: `, possible[i].message, "Key: ", possible[i].key);
	};
};

detectSingleCharXOR("../singleByteXORCipher/assets/The_Odyssey.txt", "./assets/encryptedList.txt"); // Top possibility is the message "Now that the party is jumping"

module.exports = detectSingleCharXOR;
