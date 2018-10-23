/*****************************
* Variables and data types
* */
/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var _3years = 3;
var jognMark = 'Jogn and Mark';
// var function = 23;
// var delete = 23;
*/


/*****************************
 * Variables and data types
 * */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + '  is a ' + age + ' year old '
  + job + ' Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'drive';

// alert(firstName + '  is a ' + age + ' year old '
//   + job + ' Is he married? ' + isMarried);
*/


/*****************************
 * Basic operators
 * */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now + 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJogn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older the John');
var x;
console.log(typeof x);
*/


/*****************************
 * Basic operators
 * */
/*

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJogn = now - yearJohn;
var ageMark = 35;
var average = ageJogn + ageMark / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 -6
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/


/*****************************
 * CODING CHALLENGE 1
 * */
/*

var massMark = 76; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / ( heightMark + heightMark);
var BMIJohn = massJohn / ( heightJohn + heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/


/*****************************
 * If / else statements
 * */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 76; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / ( heightMark + heightMark);
var BMIJohn = massJohn / ( heightJohn + heightJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher then John');
} else {
  console.log('John\'s BMI is higher then Mark');
}
*/


/*****************************
 * Boolean logic
 * */
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age < 30) {
  console.log(firstName + ' is a young man.');
}else {
  console.log(firstName + ' is a man.');
}
*/


/*****************************
 * The Ternary operator and Switch Statements
 * */
/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// if (age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

// Switch statement
var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/


/*****************************
 * Truthy and Falsy values and equality operators
 * */

// falsy values: undefined, null, 0, '', Nan
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height == 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}
*/


/*****************************
 * CODING CHALLENGE 1
 * */
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 113 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team winds with ' + scoreJohn + ' points.');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike\'s team winds with ' + scoreMike + ' points.');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log('Mary\'s team winds with ' + scoreMary + ' points.');
} else {
  console.log('There is a draw');
}

// if (scoreJohn > scoreMike) {
//   console.log('John\'s team winds with ' + scoreJohn + ' points.');
// } else if ( scoreMike > scoreJohn) {
//   console.log('Mike\'s team winds with ' + scoreMike + ' points.');
// } else {
//   console.log('There is a draw');
// }
*/


/*****************************
 * Functions
 */
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

