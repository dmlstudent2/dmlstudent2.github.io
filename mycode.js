console.log('This message STILL DOES appears in the console.');
document.write('<p>Fri #27</p>');
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

function addOne(num) {
 var plusOne = num + 1;
 document.write("<p>Now you have " + plusOne + ".</p>");
}
var numberOfKittens = 5;
var numberOfPuppies = 6;
addOne(numberOfKittens);
addOne(numberOfPuppies);

// first and last name
function completeName(first, last) {
 document.write("<p>" + first + " " + last + "</p>");
}
var firstName = 'Noah';
var lastName = 'Norris';
completeName(firstName, lastName);

// return a value
function square(num) {
 return num * num;
}
console.log(square(5));
squareOfFive = square(5);
console.log(squareOfFive);

// temperature (lesson 2)
function wearCoat(temperature) {
 if (temperature < 0) {
  document.write("<p>Stay inside.</p>");
 } else if (temperature < 30 ) {
  document.write("<p>Wear a coat and a hat.</p>");
 } else if (temperature < 50 || temperature == 73) {
  document.write("<p>Wear a coat.</p>");
 } else {
  document.write("<p>Do anything you want.</p>");
 }
}
 
var temperature = 73;
wearCoat(temperature);

function bottlesOfBeer(bottles) {
 while (bottles > 0) {
  document.write(bottles);
  bottles -= 1;
 }
}
var bottles = 10;
function bottlesOfBeer(bottles);
