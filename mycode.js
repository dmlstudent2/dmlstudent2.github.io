console.log('This message STILL DOES appears in the console.');
document.write('<p>Fri #41</p>');
/* var numberOfKittens = 5;
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
  document.write("<p>" + bottles  + "</p>");
  bottles -= 1;
 }
}
var bottles = 10;
bottlesOfBeer(bottles);

// exploring let
for (var i = 0; i < 10; i++) {
 console.log(i);
}
console.log("var i: " + i);

for (let i = 0; i <10; i++) {
    console.log(i);
}

console.log(i); 
*/

/*
// nested for loops
for (i=1; i<13; i++) {
 var product;
 for (j=1; j<13; j++) {
  product = i * j;
  console.log(i + "x " + j + " = " + product);
 }
}
*/


// arrays
var favoriteFoods = ['chocolate', 'ice cream', 'bagels'];
console.log(favoriteFoods[0]);
favoriteFoods.push('chicken soup');
console.log("length: " + favoriteFoods.length);

// looping through arrays
for ( i = 0; i < favoriteFoods.length; i++ ) {
 console.log(favoriteFoods[i]);
}

// love calculator #1
loveName = 'Maryanne';
score = 0;
/* 
for ( i = 0; i < loveName.length; i++ ) {
 if ( loveName[i] == "a" || loveName[i] == "e" || loveName[i] == "i"  || loveName[i] == "o"  || loveName[i] == "u" ) {
  score += 5;
 }
}
console.log("Score: " + score);
*/

// love calculator #2
loveName2 = 'Yuika';
for ( i=0; i < loveName.length; i++ ) {
 for ( j=0; j < loveName2.length; j++ ) {
  if ( loveName[i].toLowerCase() == loveName2[j].toLowerCase()) {
    score += 5;
  }
 }
}
console.log("Love Calculator - Two Names score: " + score);

console.log("So much for trying.");
