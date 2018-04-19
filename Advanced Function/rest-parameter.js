function sumAll(...args) {
    // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); //6

function showName(firstName, lastName, ...titles) {
    console.log(firstName + " " + lastName); // Julius Caesar
    console.log(titles[0]); // Consul
    console.log(titles[1]); // Imperator
    console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator", "Asad");

//arguments variable    //object like variable
function showName() {
    console.log(arguments.length);
    console.log(arguments);
    // it's iterable
    // for(let arg of arguments) alert(arg);
}

showName("Julius", "Caesar");
showName("Ilya");

//spread operator
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let merged = [0, ...arr1, 5, ...arr2]; //merging array with spread operator

console.log(Math.max(...arr1));
console.log(Math.max(...arr1, ...arr2));
console.log(Math.max(...arr2, 23));
console.log(merged);

let str = "Hello";
console.log([...str]); // H,e,l,l,o   ///string to character
console.log(Array.from(str));