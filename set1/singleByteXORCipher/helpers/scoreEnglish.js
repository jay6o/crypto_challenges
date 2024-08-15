const Frequencies = require("./frequenciesObject.js");
const getBookCharacterFrequencies = require("./getBookCharacterFrequencies.js");
const getMessageCharacterFrequencies = require("./getMessageCharacterFrequencies.js");

scoreEnglish = (textToScore, bookFrequencies) => {
	let score = 0;
	const messageFrequencies = getMessageCharacterFrequencies(textToScore);
	let scores = new Frequencies();
	for (let key in messageFrequencies) {
		scores.self[key] = messageFrequencies[key] - bookFrequencies[key];
	}
	for (let key in scores.self) {
		score += scores.self[key];
	}
	return score;
}

module.exports = scoreEnglish;
