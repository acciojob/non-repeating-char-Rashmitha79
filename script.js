function firstNonRepeatedChar(str) {
  if (str.length === 0) {
    return null; // Return null for empty strings
  }

  const charCount = {}; // Object to store character frequencies

  // Count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // If all characters are repeated
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
