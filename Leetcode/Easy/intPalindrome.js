// Easy Solution (if they allow you to change the int to a string)
function intPalindrome(num) {
  return num.toString().split("").reverse().join("") === num.toString();
}

console.log(intPalindrome(122));
