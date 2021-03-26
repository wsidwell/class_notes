// var vs let vs const

// let name;
// name = 'Warren'

//Block scoped and can be reassigned
// let name;
// name = 'Warren';
// console.log(name);
// name = 'Lane';
// console.log(name);

//
// const number = 15
// console.log(number);
// const number = 17;
// console.log(number);
// console.log(x);
// let x = 10;

// var is function scoped and declaration loads up before the file is read
// console.log(x);
// var x = 10;

// let must be declared first before being called; else error occurs
// console.log(y);
// let y = 15 error!

let myNum = 5;
let myStr = '5';
console.log(typeof myNum); //typeof tells you the data type
console.log(typeof myStr);

console.log(myNum + myStr); //concatenates int with the string and turns it into a string

// Git
// Version control system to keep chronological timeline of all of your code changes.
// To traverse file system in terminal:
// cd name_of_folder --> moves you down (Change Directory)
// cd .. --> moves you up (Change Directory)
// ls --> lists items inside existing folder (List)
// pwd --> specifies directory path you're currently in (Print Working Directory)

// To initiate a git repository
// git init
// Staging files for a commit
// git status tells you the status of your repository
// git add <file_name> --> to add one particular file
//  OR git add . --> to add all of the files inside the folder that you're in
// git commit -m "Your commit message here"