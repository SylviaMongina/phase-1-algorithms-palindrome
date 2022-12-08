function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  const reversedWord = reverseString(word);
  // this lets one compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
   
  reverse the input string
  if the reversed string is the same as the input
    return true
  else
*/

/*
  Add written explanation of your solution here
  Question:Write a function isPalindrome that will receive one argument, a string. 
  Your function should return true if the string is a palindrome
   (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
   and return false if it is not a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");


  console.log("Expecting: true");
  console.log("=>", isPalindrome("sylvia"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bosire"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
