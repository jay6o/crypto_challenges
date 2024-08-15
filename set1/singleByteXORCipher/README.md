# Single Byte XOR Cipher  
## Instructions  
Take a hex string that was XOR'd against a single character, find the key and decrypt the message. Do this using character frequency and scoring the resulting decoded strings against the english character frequencies.

---

## Implementation
Get data for character freqencies from english text (a book) and use it to decide whether or not the decoded message is english, return the message with the best score.

-   XOR the hex string against every possibility (only one byte in this case)
-   Decode the hex string into plaintext (utf8) using each key in the byte
-   Score each plaintext by getting the frequency of English alphabetic characters and calculating the difference of said frequency and the books character frequencies: `characterScore = decodedCharacterFrequency - bookCharacterFrequency`  
-   Take the sum of each characters frequency after getting the difference, and theoretically the strings closest to 0 should have the best score: `decodedMessageScore = sum(ofAllCharacterScores)`

As you may notice, decoded messages like "����������������������������������", "33752;|{/|0579|=|,3)28|3:|>=?32", and "?\x13\x13\x17\x15\x12\x1B\\1?[" will have many 0's as the values in the character frequency object. When you subtract the books character frequencies from the messages character you will (likely) get a negative number. The sum of each difference will be used as the score. On the other hand, messages like "Hello world", and "You aren't supposed to read this" will have a positive float value in many of the characters frequencies. The difference of these frequencies and the books frequencies will be a larger number than that of the non-english decoded messages. The sum of these differences will be used as the score. Theoretically, the sum of the differences will be larger for the English (right) message than the non-English (wrong) decoded string.

This implementation would make it easier if the possibilities were larger, and we could just run the code instead of reading through each decoded message.
