//delete elements and free, splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them by another
arr.splice(0, 3, "Let's", "dance")
console.log(arr) // now ["Let's", "dance", "right", "now"]

let arr2 = [1, 2, 3];
arr2.splice(-1, 1, 4, 5);
console.log(arr2);

//slice
let str = "test";
let arr3 = ["t", "e", "s", "t"];

console.log(str.slice(1, 3)); // es
console.log(arr3.slice(1, 3)); // e,s
console.log(str.slice(-2)); // st
console.log(arr3.slice(-2)); // s,t

//concat
// merge arr2, but not save
console.log(arr2.concat([6, 7]));
console.log(arr2.concat([3, 4], [5, 6]));
console.log(arr2.concat([3, 4], 5, 6));

//indexOf, lastIndexOf, includes
console.log(arr2);
console.log(arr2.indexOf(4, 0));
console.log(arr2.lastIndexOf(4, 2));
console.log(arr2.includes(2, 0));

//find, findIndex, filter
let users = [{
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Pete"
    },
    {
        id: 3,
        name: "Mary"
    }
];
let res = users.find(item => item.id == 2);
console.log(res.name);

res = users.findIndex(item => item.id == 2);
console.log(res);

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2

//map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
console.log(lengths); // 5,7,6

//sort
arr2 = [1, 3, 5, 4, 2, 8, 7, 12]
console.log(arr2.sort()); //1, 12, 2, 3, 4, 5, 7, 8

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(arr2.sort(compareNumeric)); //1, 2, 3, 4, 5, 7, 8, 12
console.log(arr2.sort((a, b) => a - b));

console.log(arr2.reverse());

//split, join
let ip = '192.168.20.150';
console.log(ip.split('.')); //'192', '168', '20', '150'
console.log(ip.split('.', 2)); //'192', '168'
ip = [192, 168, 70, 120];
console.log(ip.join('.')); //192.168.70.120
console.log(ip.join('.'));