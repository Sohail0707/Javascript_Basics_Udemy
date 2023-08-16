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
