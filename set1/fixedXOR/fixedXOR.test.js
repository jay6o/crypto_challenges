const fixedXOR = require("./fixedXOR.js");
const { expect, test } = require("@jest/globals");

test('Returns the XOR', () => {
	expect(fixedXOR("1c0111001f010100061a024b53535009181c",
		"686974207468652062756c6c277320657965")).toBe("746865206b696420646f6e277420706c6179");
});

test('Returns the XOR', () => {
	expect(fixedXOR("a173df7a5b261b0482732aeb84a4aedb",
		"071ca868a76e5cec65269008923f4a1b")).toBe("a66f7712fc4847e8e755bae3169be4c0");
});


test('Returns the XOR', () => {
	expect(fixedXOR("1cafd42a",
		"e95ef420")).toBe("f5f1200a");
});
