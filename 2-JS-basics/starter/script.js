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


/*****************************
 * Functions Statements and Expressions
 */

// Function declaration
//   function whatDoYouDo() {}
/*
// Function expression
var whatDoYouDO = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
};

console.log(whatDoYouDO('teacher', 'John'));
console.log(whatDoYouDO('driver', 'Jane'));
console.log(whatDoYouDO('retired', 'Mark'));
*/


/*****************************
 * Arrays
 */
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1998, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1998));

var isDesigner = john.indexOf('designer') === -1? 'John id NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*****************************
 * CODING CHALLENGE 3
 */
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if(bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalValues = [bills[0] * tips[0],
                   bills[1] * tips[1],
                   bills[2] * tips[2]];
console.log(tips, finalValues);
*/


/*****************************
 * Objects and properties
 */
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1998,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['fistName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/*****************************
 * Objects and methods
 */
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1998,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john.age);
*/


/*****************************
 * CODING CHALLENGE 4
 */

/*
var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height + this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height + this.height);
    return this.bmi;
  }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if(mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same BMI');
}
*/


/*****************************
 * Loops and iteration
 */

/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 10, 10 < 10 FALSE, log i to the console, i++

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/


/*****************************
 * CODING CHALLENGE 5
 */

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 188, 42],
  calcTips: function () {
    this.tips  = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      //  Determine percentage based on tipping rules
      var percentage;

      if (this.bills[i] < 50) {
        percentage = .2;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

    //   Add results to the corresponing arrays
    }
  }
};

