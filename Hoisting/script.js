"use strict";

// ////////////// Variables ///////////////////////
// console.log(me);
// Shown undefined in the console
// console.log(job);
// Shown uninitialized
// console.log(year);
// Shown uninitialized

var me = "Sohail";
let job = "Freelancer";
const year = 2023;

// ////////////// Function ///////////////////
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
