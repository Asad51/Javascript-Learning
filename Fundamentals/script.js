"use strict";

//variables declaration
/*let name = 'Asad',
    age = 21,
    msg = 'Hello world'; //let/var
const BIRTHDAY = '31.01.1996'; //constant

//string declaration
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
console.log(phrase);

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3*/

//Type Conversion
let value = true;
console.log(typeof(value));
let str = String(value);
console.log(typeof(str));

//String Concatenation
/**In addition operator integer becomes string
 * and other operations string converted into integer
 */
console.log('String Concatenation');
console.log('=====================');
let a = '1',
    b = '2',
    c;
c = 1 + '2';
console.log(c);
c = '1' + 2;
console.log(c);
c = 1 * '2';
console.log(c);
console.log(1 / '2');
console.log(2 - '1');
// No effect on numbers
let x = 1;
console.log(+x); // 1
let y = -2;
console.log(+y); // -2
// Converts non-numbers
console.log(-true); // -1
console.log(+""); // 0
console.log(-false); //-0
//console.logNumber(...));
let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

console.log(2 ** 3); //8
console.log('2' ** 3); //8
console.log();

//Interaction
/*
while (true) {
    let email = prompt('Enter valid email', 'asad@gmail.com');
    console.log(email);
    if (email != "" && email != null && email != undefined) {
        break;
    }
}

while (!confirm('Adults Only! Do you want to enter?')) {

}*/

//ifelse operator
/*checkIfElse();

function checkIfElse() {
    console.log('If Else Operator');
    console.log('--------------------');
    let age = prompt('age?', 18);

    let message = (age < 3) ? 'Hi, baby!' :
        (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
        'What an unusual age!';

    console.log(message);

    let company = prompt('Which company created JavaScript?', '');
    //if == ?
    (company == 'Netscape') ?
    console.log('Right!'): console.log('Wrong.');
}*/

//Looping
/*Looping();

function Looping() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 3);

    //label
    outer: for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            let input = prompt(`Value at coords (${i},${j})`, '');

            // if an empty string or canceled, then break out of both loops
            if (!input) break outer;
        }
    }
    alert('Done!');
}*/

//Functions

let sayHi = function() {
    console.log("Hello");
};
let func = sayHi;
sayHi();
func();

//arrow function
let sayHello = () => {
    console.log('Hello Javascript');
};
sayHello();