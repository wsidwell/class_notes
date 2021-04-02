//Quick string question answer:
let name = 'Kate';
console.log(`This can interpolate as well s print any symbol ' " [] ${name}`) //back ticks
console.log('This will print like a string but our symbols need help') //quotes

// Conditional Statements: if, if else/else if, switch, ternary

// IF STATEMENTS
// Checks for a boolean value, if something is true - it is truthy(a truthy statement), or falsy
// Truthy - if condition is (or can be) true
// Falsy - if condition is false (or can be) false
// Some falsy expressions are: null, NaN (not a number), 0, an empty string (" "), and undefined

// If a condition is true, the JS will execute (perform) the code block
// If checks one, singular, condition

// Declare a variable
let isOpen = true;

// The condition to check is held in our ( )
if (isOpen === true) {
    // The code we perform if the condition is met is held in {}
    console.log(`The door is open.`);
};

// Same as above, statement checks if the value in parentheses is true
if (isOpen) {
    console.log(`The door is open.`);
};

// Can test false values
if (isOpen === false) {
    console.log(`The door is shut`);
};

// IF ELSE
// If else is used to check a condition, but run a code block for either the met condition or a
//  separate code block if it does not meet the condition

let isOpen = false;

if (isOpen === true) {
    console.log(`You can go inside, the door is open.`);
} else {
    console.log(`The door is not open to enter.`);
};

let temp = 70;

if (temp >= 65) {
    console.log(`Wow, what a nice day.`);
} else {
    console.log(`I need a sweater.`);
};

// ELSE IF
// Else if is used to allow us to check more than two conditions
// Examples: Day 2 Challenge, Fizz Buzz Challenge

let temp = 51;

if (temp >= 80) {
    console.log(`I know people are wearing shorts.`);
} else if (temp >= 65) {
    console.log(`This is t-shirt weather for most folks`);
} else if (temp >= 50) {
    console.log(`You're gonna need a sweater at least.`);
} else {
    console.log(`I am not leaving my house and you cannot make me.`);
};

let userName = `myUserName`;
let password = `myPassword`;

if (userName === `myUserName` && password === `myPassword`) {
    console.log(`Welcome Back, ${userName}. You're logged in!`);
} else if (userName === `myUserName`) {
    console.log(`Your username is correct, but you have the wrong password.`);
} else {
    console.log(`You are not in our database, would you like to sign up?`);
};

// ctrl + z to undo

// SWITCH STATEMENTS    
// Execute a block of code depending on the "cases"; condition met? check against cases
// use case (condition): - starts code block
// break - to end the code
// Example: Fizz Buzz
// Default - code to be ran if no cases are met, good practice to have

let favColor = `Black`;

switch (favColor) {
    case `blue`:
        console.log(`Blue like the sky`);
        break;
    case `red`:
        console.log(`Red like a rose`);
        break;
    default: 
        console.log(`${favColor} is beautiful too`);
};

let doYouLikePizza = `Yep`;

switch (doYouLikePizza) {
    case `yep`:
    case `yes`:
    case `duh`:
        console.log(`Me too! I love pizza.`);
        break;
    case `no`:
    case `nope`:
    case `nyet`:
        console.log(`ohh... I will order something else for dinner`);
        break;
    default:
        console.log(`I cannot tell if that is 'Yes' or 'No'.`);
};

// TERNARY
// Concise way to check two (or more) conditions using the syntax of ? and :
// Structure:
// ( condition ) ? ( codeToRunIfTrue/Truthy ) : ( codeToRunIfFalse/Falsy )

let temp = 70;

// Ternary
(temp > 75) ? console.log(`Indiana summer temps`) : console.log(`Indiana spring temp`);

// Instead of:
if (temp > 75) {
    console.log(`Summer`);
} else {
    console.log(`Spring`);
};

let num = -25;

(num >0) ? console.log(`Positive Number`) :
    (num < 0) ? console.log(`Negative Number`) :
    console.log(`Number is 0, neutral.`);

// LOOPS
// For loop - a quick and easy way to iterate (loop over and over), to do it repeatedly
// Infinite loops are possible (best to avoid): ctrl + c in terminal, or close VS Code
// Loops take in three parameters, each separated by a semicolon:
// 1) initial expression
// 2) condition
// 3) increment (or decrement) expression

//    (1) ;    (2) ; (3)
for (i = 0; i <= 10; i++) {
    console.log(i);
};

// To decrease by 1 we use i--
for (i = 10; i >= 0; i--) {
    console.log(i);
};

// Challenge: use a For Loop to count to 20, but by 2's
for (i = 0; i <=20; i += 2) {
    console.log(i);
};

// Printing each letter with a loop
let word = `Fantastic`;

for (let i = 0; i < word.length; i++) {
    // console.log(i); // printing the numerical index of the string's letter
    console.log(word[i]); // square brackets are used to get the letter itself (value of index)
};