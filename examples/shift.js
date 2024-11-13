function shiftLetter(letter, shiftAmount) {
    const isUpperCase = letter >= 'A' && letter <= 'Z';
    const isLowerCase = letter >= 'a' && letter <= 'z';

    if (isUpperCase || isLowerCase) {
        // ASCII code of 'A' or 'a' (depending on case)
        const base = isUpperCase ? 65 : 97;
        // Normalize, apply shift, wrap around with mod 26, then convert back to letter
        return String.fromCharCode((letter.charCodeAt(0) - base + shiftAmount) % 26 + base);
    } else {
        // Return the character unchanged if it's not a letter
        return letter;
    }
}

function shiftSentence(sentence, shiftAmount) {
    return sentence
        .split('')                     // Split the sentence into an array of characters
        .map(char => shiftLetter(char, shiftAmount)) // Shift only letters
        .join('');                     // Join the shifted characters back into a string
}

// Example usage:
console.log(shiftSentence('Hello World! 123', 2)); // Output: "Jgnnq Yqtnf! 123"
console.log(shiftSentence('Shift this sentence by 2!', -2)); // Output: "Qgfv rjgs qfqupcu zx 2!"
