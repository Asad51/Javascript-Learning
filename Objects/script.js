//Object Creation
let user1 = new Object(); //constructor
let user2 = {}; //object literal
let user = {
    id: 1,
    "name": "Asad",
    age: 21,
    "Liked Posts": 33 //multi-word property
};
console.log(user.name);
user.isAdmin = true; //adding property
if (user.isAdmin) {
    console.log('Hello Admin');
}
console.log(user['Liked Posts']); //using square bracket
delete user.age; //removing property
delete user["Liked Posts"];
let key = "name";
console.log(user[key]); //using variable as key
let fruit = "apple";
let fruit1 = "orange";
//using square bracket
let bag = {
    [fruit]: 5,
    ['apple' + 'computer']: 10
        ///fruit1: 8//undefined
};
console.log(bag.apple);
console.log(bag.applecomputer);

//property value shorten
function makeUser(name, age) {
    //name = "Asad";
    //age = 23;
    /*return {
        'name': name,
        age: age
    };*/
    return {
        name, // same as name: name
        age // same as age: age
    };
}

let user3 = makeUser("John", 30);
console.log(user3.name + " " + user3.age);

//checking existence
if (user3.id === undefined) {
    console.log("No such property");
}
let age1 = "age";
if ("name" in user3) { //in operator "key"
    console.log(user3.name);
}
if (age1 in user3) { //in operator
    console.log(user3[age1]);
}
//for in loop
for (let key1 in user3) {
    console.log(user3[key1]);
}
// integer property get ordered, but other are listed in the creation order
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    name: "John",
    asurename: "Smith",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

//cloning object
let user4 = {
    name: "John",
    age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
let user6 = {
    name: "John",
    age: 30
};

let clone1 = Object.assign({}, user6);

//merging objects
let user5 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user5, permissions1, permissions2);
//over-written
// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });
console.log(user.name);

//cloning reference
let user7 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone2 = Object.assign({}, user7);
console.log(user7.sizes === clone2.sizes); // true, same object
// user and clone share sizes
user7.sizes.width++; // change a property from one place
console.log(clone2.sizes.width); // 51, see the result from the other one

//exercise
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (isNumber(menu[key])) {
            menu[key] = menu[key] * 2;
        }
        console.log(menu[key]);
    }
};

function isNumber(num) {
    if (isNaN(num)) {
        return false;
    }
    return true;
}