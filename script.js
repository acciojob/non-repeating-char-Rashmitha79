function firstNonRepeatedChar(str) {
 // Write your code here

    if (!str) {
        return null;
    }

    const charCount = new Array(26).fill(0); // Assuming only lowercase English letters
    
    // Count the occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // Find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return char;
        }
    }