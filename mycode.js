console.log('This message STILL DOES appears in the console.');
document.write('<p>Fri #18</p>');
var numberOfKittens = 5;
var numberOfPuppies = 6;
console.log(numberOfKittens + numberOfPuppies);

// using arithmetic operators
var num1 = 16;
var num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(-num1);
console.log(num1 % num2);

// strings in variables
var kittensName = "Fluffy";
console.log("I\'d like to use an apostrope.");

// concatenation
var fullName = kittensName + " McDougal"; 
console.log(fullName);

// test
document.write("<p>Next!</p>");

// concatenation
var kittensName = 'Admiral';
kittensName += ' Snuggles';
document.write("<p>" + kittensName + "</p>");

// first and last name
var first = 'Lee';
var last = 'Harris';
document.write("<p>" + first + " " + last + "</p>");

// functions
function turtleFact() {
 document.write("<p>A turtle's lower shell is called a plastron.</p>"); 
}
turtleFact()

function callKitten(kittenName) {
 document.write("<p>Come here, " + kittenName + "!</p>");
}
callKitten("Tabby");

function add(a, b) {
 var sum = a + b
 document.write("<p>" + sum + "</p>");
}
add(5, 7);
add(37, 63);
