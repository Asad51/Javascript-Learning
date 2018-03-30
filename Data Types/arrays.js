//declaration
let a = new Array();
let arr = [];
let fruits = ['Apple', "Orange", "mango"];
console.log(fruits[1]);
console.log(fruits.length);

// mix of values
let arr1 = ['Apple', { name: 'John' }, true, function () { console.log('hello'); }];
// get the object at index 1 and then show its name
console.log(arr1[1].name); // John
// get the function at index 3 and run it
arr1[3](); // hello

console.log(fruits.pop()); // remove "mango"
console.log(fruits); // Apple, Orange
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear

console.log(fruits.shift()); // remove Apple
console.log(fruits); // Orange, Pear
fruits.unshift('Apple');
console.log(fruits); // Apple, Orange, Pear

fruits = ["Banana"]
let arr2 = fruits; // copy by reference (two variables reference the same array)
console.log(arr2 === fruits); // true
arr2.push("Pear"); // modify the array by reference
console.log(fruits); // Banana, Pear - 2 items now