const fs = require("fs");
const Frequencies = require("./frequenciesObject.js");

/**
 * 	Helper method that initializes and returns the character frequencies of a text.
 * 
 * 	@param book The text to generate the frequencies for
 * 	@returns The frequencies object
 */
getBookCharacterFrequencies = (book) => {
	let frequencies = new Frequencies();
	let chars = 0;
	const bookContents = fs.readFileSync(book, "utf8");
	for (character of bookContents) {
		chars += 1;
		switch (character.toLowerCase()) {
			case "a":
				frequencies.self["a"] += 1;
				break;
			case "b":
				frequencies.self["b"] += 1;
				break;
			case "c":
				frequencies.self["c"] += 1;
				break;
			case "d":
				frequencies.self["d"] += 1;
				break;
			case "e":
				frequencies.self["e"] += 1;
				break;
			case "f":
				frequencies.self["f"] += 1;
				break;
			case "g":
				frequencies.self["g"] += 1;
				break;
			case "h":
				frequencies.self["h"] += 1;
				break;
			case "i":
				frequencies.self["i"] += 1
				break;
			case "j":
				frequencies.self["j"] += 1;
				break;
			case "k":
				frequencies.self["k"] += 1;
				break;
			case "l":
				frequencies.self["l"] += 1;
				break;
			case "m":
				frequencies.self["m"] += 1;
				break;
			case "n":
				frequencies.self["n"] += 1;
				break;
			case "o":
				frequencies.self["o"] += 1;
				break;
			case "p":
				frequencies.self["p"] += 1;
				break;
			case "q":
				frequencies.self["q"] += 1;
				break;
			case "r":
				frequencies.self["r"] += 1;
				break;
			case "s":
				frequencies.self["s"] += 1;
				break;
			case "t":
				frequencies.self["t"] += 1;
				break;
			case "u":
				frequencies.self["u"] += 1;
				break;
			case "v":
				frequencies.self["v"] += 1;
				break;
			case "w":
				frequencies.self["w"] += 1;
				break;
			case "x":
				frequencies.self["x"] += 1;
				break;
			case "y":
				frequencies.self["y"] += 1;
				break;
			case "z":
				frequencies.self["z"] += 1;
				break;
			case " ":
				frequencies.self[" "] += 1;
				break;
		}
	}
	for (key in frequencies.self) {
		frequencies.self[key] /= chars;
	}
	return frequencies.self;
}

module.exports = getBookCharacterFrequencies;
