// Day 04 Functions; Scope; Hoisting; and Literals

// Literals
// They represent values in JavaScript that have been hardcoded

let butlerMascot = `Bulldog`
let myAge = 48 // this value is hardcoded
let arr = [] // this value is not hardcoded

// Hoisting
/*
- General way of thinking about how code creation and execution works in JavaScript
- JavaScript puts [var]iable declarations and function declarations into memory during
    compile phase of the code. This makes it feel that those are "on top" or loaded first.
*/

console.log(myName);
// variable declaration = variable value
var myName = `Paul` // let or const are NOT hoisted, on functions and [var]iables

sayHello();

function sayHello() { // function declaration is hoisted
    console.log(`This is a function declaration`);
};

// func() // cannot access fun() before initialization
let func = function() { //function expression is NOT hoisted
    console.log(`This is a function expression`);
};

// Scope
// Hierarchy of variables in our code - commonly referred to as global scope,
//  local scope, parent scope, and child scope.

let coffeeOrigin = `Ethiopia - global scope` // global scope

function exampleFunction() {
    let x = `Local scope - declared inside function` // local scope
    // console.log(x);
    // console.log(coffeeOrigin);
}
exampleFunction();

// Global scope can be accessed by local function scope
// Local scope cannot be accessed by global scope

// MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope

// Functions
// block of code designed to perform a particular task
// To be discussed at a later date

function addNums(x, y) {
    result = x + y;
    return result
};

let myStuff = addNums(5,6) // let myStuff = 11 <<-- inside memory location

console.log(myStuff + 4)