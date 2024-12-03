// # This function counts every word in a Hashmap

function countWordRepetitions(sentence) {
    // Normalize case and remove punctuation
    const words = sentence
        .toLowerCase() // Convert to lowercase for case-insensitive comparison
        .replace(/[^\w\s]/g, '') // Remove punctuation
        .split(/\s+/); // Split by spaces

    // Create a map to store word counts
    const wordCounts = new Map();

    words.forEach(word => {
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word) + 1);
        } else {
            wordCounts.set(word, 1);
        }
    });

    return wordCounts;
}

// Example usage
const sentence = "This is a test. This test is just a test.";
const wordCounts = countWordRepetitions(sentence);

// Display the word counts
wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
