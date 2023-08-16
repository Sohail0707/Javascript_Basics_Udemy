"use strict";

// Return the window object[]
console.log(this);

// Here this is undefined
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(2001);

// Here this wil point to the parent object
const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(1999);

// here this will be the sohail[] object itself. because sohail[] is the object who is calling the calcAge method
const sohail = {
  dob: 2001,
  calcAge: function () {
    console.log(this);
  },
  age: 21,
};
sohail.calcAge();
