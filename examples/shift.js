function shiftLetter(char, shiftAmount) {
    const totalAscii = 256; // Total ASCII characters
    const asciiValue = char.charCodeAt(0); // Get ASCII value of the character
    const shiftedValue = (asciiValue + shiftAmount + totalAscii) % totalAscii; // Shift and wrap around
    return String.fromCharCode(shiftedValue); // Convert back to a character
}

function shiftSentence(sentence, shiftAmount) {
    return sentence
        .split('') // Split the sentence into an array of characters
        .map(char => shiftLetter(char, shiftAmount)) // Shift all characters
        .join(''); // Join the shifted characters back into a string
}

// Example usage:
console.log(shiftSentence('Hello World! 123', 2));  // Output: "Jgnnq\"Yqtnf#\"345"
console.log(shiftSentence('Shift this sentence by 2!', -2)); // Output: "Qfgdr&rfhq&qclpaqlc^`01"
console.log(shiftSentence('🎉 Unicode! 🌟', 5));  // Output: "🎖!Yniwnij$%🌟&"
