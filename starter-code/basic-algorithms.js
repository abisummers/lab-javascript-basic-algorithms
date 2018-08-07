// Names and Input
var hacker = "Abi"; //driver
var hacker2 = "Manon"; //navigator

console.log("the driver's name is " + hacker);
console.log("the navigator's name is " + hacker2);

//Conditionals

console.log(hacker2.toUpperCase());

if (hacker.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker.length + " characters"
  );
} else if (hacker.length < hacker2.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names" + hacker.length + " characters!!"
  );
}

// LOOPS
//name with spaces
console.log(
  hacker2
    .toUpperCase()
    .split("")
    .join(" ")
);

// name with spaces (for-loop)
var output = "";
for (var i = 0; i < hacker2.length; i++) {
  var separator = i === 0 ? "" : " ";
  output += separator + hacker2[i].toUpperCase();
}
console.log(output);

// name with spaces (reduce)
console.log(
  hacker2
    .split("")
    .reduce(
      (acc, curr, i) => acc + (i === 0 ? "" : " ") + curr.toUpperCase(),
      ""
    )
);

//name reversed
console.log(
  hacker
    .split("")
    .reverse()
    .join("")
);

//Comparing first letters
var final = hacker[0].localeCompare(hacker2[0]);
console.log(final);

if (final === -1) {
  console.log(hacker + " goes first");
} else if (final === 1) {
  console.log(hacker2 + "goes first");
} else {
  console.log("you both have the same name");
}

// BONUS
var originalString = "race cars";
var string = originalString.replace(" ", "").toLowerCase();

var first = string.slice(0, string.length / 2);
console.log(first);

var offset = string.length % 2 === 0 ? 0 : 1;
var second = string.slice(string.length / 2 + offset, string.length);
console.log(second);

var reverse = second
  .split("")
  .reverse()
  .join("");

if (first === reverse) {
  console.log("palindrome");
} else {
  console.log("it's not a palindrome");
}

// as a function
function isPalindrome(originalString) {
  var string = originalString.replace(" ", "").toLowerCase();

  var first = string.slice(0, string.length / 2);

  var offset = string.length % 2 === 0 ? 0 : 1;
  var second = string.slice(string.length / 2 + offset, string.length);

  var reverse = second
    .split("")
    .reverse()
    .join("");

  return first === reverse;
}

if (isPalindrome(prompt("give me a string"))) {
  console.log("palindrome");
} else {
  console.log("it's not a palindrome");
}

// Lorem ipsum generator
