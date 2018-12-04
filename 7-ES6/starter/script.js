/////////////////////////////
// Lecture: let and const
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*

// ES5
function driversLicence5(passedTest) {

  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1998;

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }

}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {

  // console.log(firstName);
  let firstName;
  const yearOfBirth = 1998;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence6(true);



let i = 23;
for (let i = 0; i < 5;  i++) {
  console.log(i);
}

console.log(i);
*/


/////////////////////////////
// Lecture: Blocks and IIFEs
/*
// ES 6
{
  const a = 1;
  let b = 2;
  var c = 2;
}

// console.log(a + b);

// ES 5
(function () {
  var c = 3;
})();

console.log(c);*/


/////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1998;

function calcAge(year) {
  return 2016 - year;
}

// ES 5
console.log('This is ' + firstName + ' ' + lastName + '. Today, he is ' + calcAge(yearOfBirth));

// ES 6
console.log(`This is ${firstName} ${lastName}. Today, he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/


/////////////////////////////
// Lecture: Strings
/*
const years = [1990, 1965, 1962, 1937];

// ES5
var ages5 = years.map(function (el) {
  return 2018 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = year.map((el, index) => `Age element ${index +1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);*/


/////////////////////////////
// Lecture: Arrow functions 2

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {

    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};
// box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};
// box6.clickMe();

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};
box66.clickMe();