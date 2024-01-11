function isPalindrome(word) {
  // Step 1
  const lowercaseWord = word.toLowerCase();
  
  // Step 2 (optional, depends on the requirement)
  const cleanWord = lowercaseWord.replace(/[^a-z]/g, '');

  // Step 3
  let start = 0;
  let end = cleanWord.length - 1;

  // Step 4
  while (start < end) {
      // Step 4a
      if (cleanWord[start] !== cleanWord[end]) {
          // Step 4b
          return false;
      }
      
      // Step 4c
      start++;
      end--;
  }

  // Step 5
  return true;
}

/* 
Add your pseudocode here:
1. Convert the input string to lowercase.
2. Remove any non-letter characters (if needed).
3. Initialize two pointers, one at the beginning and one at the end of the string.
4. Iterate until the pointers meet:
      a. Compare the characters at the pointers.
      b. If they are not equal, return false.
      c. Move the pointers towards each other.
5. If the loop completes without returning false, the string is a palindrome, return true.
*/

/*
Add written explanation of your solution here:
The function converts the input string to lowercase and optionally removes non-letter characters.
It then uses two pointers to compare characters from the start and end of the string, moving towards each other.
If at any point the characters are not equal, the function returns false.
If the loop completes without returning false, the string is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
