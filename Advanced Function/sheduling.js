function sayHi() {
    console.log("Hello World");
}

//setInterval(sayHi, 1000);
//setTimeout(sayHi, 5000);

function sayHi(greet, name) {
    console.log(greet + " , " + name);
}

setTimeout(sayHi, 2000, "Hey", "Asad");

/*function func(i) {
    i++;
}
let i = 1;
setTimeout(function run() {
    console.log(i * 100);
    //i++;
    func(i);
    setTimeout(run, 100);
}, 100);*/