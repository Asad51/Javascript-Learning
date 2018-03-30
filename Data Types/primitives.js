//number functions
let ms = 1e-6; // six zeroes to the left from 1
console.log(ms);
//hex
console.log(0xff);
//binary
console.log(0b1010110);
//octal
console.log(0o3540);

//toString
let num = 34;
console.log(num.toString(2));
console.log(1234567885455..toString(36)); //base=36 for maximum, ..for syntax
console.log(12.2226.toFixed(3)); ///returns string
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3, making number

//isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(isNaN('34')); //false

//isFinite
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

///parseInt
console.log(parseInt('100px')); //100
console.log(parseInt('100.2px')); //100
console.log(parseInt('pdj')); //NaN
console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, without 0x also works
console.log(parseInt('2n9c', 36)); // 123456

//random number
console.log(Math.random()) //0 to 1 excluding 1
function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));


/******String******/
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sumA(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sumA(1, 2)}.`); // 1 + 2 = 3.
console.log(single.length);
console.log('Asad'.length);
console.log(double.charAt(4));
//for of loop
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o
}

//substring
let str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive
console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
console.log(str.indexOf("id", 2));
console.log("Widget with id".includes("Widget")); // true
console.log("Midget".includes("id", 3)); // false, from position 3 there is no "id"
console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

str = "stringify";
console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0
console.log(str.slice(2)); // ringify, from the 2nd position till the end
console.log(str.slice(-4, -1)); // gi, from last to first
console.log(str.substring(2, 6)); // "ring" start<-> end/ end<->start
console.log(str.substring(6, 2)); // "ring"
console.log(str.substr(2, 4)); // ring, from the 2nd position get 4 characters
console.log(str.substr(-4, 2)); // gi, from the 4th position get 2 characters

//compare string
console.log('a' > 'Z'); // true
console.log('Österreich' > 'Zealand'); // true
console.log("z".codePointAt(0)); // 122
console.log(String.fromCodePoint(90)); // Z
console.log('Österreich'.localeCompare('Zealand')); // -1