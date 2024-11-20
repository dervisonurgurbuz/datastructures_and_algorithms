function shiftLetter(letter, shiftAmount) {
    // Get the Unicode code of the letter
    let charCode = letter.charCodeAt(0);
  
    // Check if the letter is lowercase or uppercase and shift accordingly
    if (letter >= 'a' && letter <= 'z') {
      // For lowercase letters
      charCode = ((charCode - 97 + shiftAmount) % 26 + 26) % 26 + 97; // 97 is the charCode for 'a'
    } else if (letter >= 'A' && letter <= 'Z') {
      // For uppercase letters
      charCode = ((charCode - 65 + shiftAmount) % 26 + 26) % 26 + 65; // 65 is the charCode for 'A'
    }
  
    // Convert the shifted charCode back to a letter
    return String.fromCharCode(charCode);
  }
  
  console.log(shiftLetter('a', 2)); // Output: 'c'
  console.log(shiftLetter('z', 2)); // Output: 'b'
  console.log(shiftLetter('A', 2)); // Output: 'C'
  console.log(shiftLetter('Z', 2)); // Output: 'B'
  