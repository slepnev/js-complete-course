///////////////////////////////////////
// Lecture: Hoisting

// function
/*
calculateAge(1990);
function calculateAge(year) {
  console.log(2016 - year);
}

var retirement = function (year) {
  console.log(65 - (2016 - year));
};
retirement(1990);


// variables
console.log(age); // undefined
var age = 23;
console.log(age); // 23

function foo() {
  var age = 65;
  console.log(age); // 65
}
foo();
console.log(age); // 23
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
// 3 scopes
// + Global scope
var a = 'Hello!';
first();

function first() {
  // + 1 scope
    var b = 'Hi!';
    second();

    function second() {
      // + 2 scope
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain
/*
// + Global scope
var a = 'Hello!';
first();

function first() {
  // + 1 scope
    var b = 'Hi!';
    second();

    function second() {
      // + 2 scope
        var c = 'Hey!';
        third()
    }
}

function third() {
  // + 1 scope
    var d = 'John';
    // console.log(a + b + c + d);
  console.log(a + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);

    function innerFunciton() {
      console.log(this);
    }
    innerFunciton();
  }
};

john.calculateAge();




