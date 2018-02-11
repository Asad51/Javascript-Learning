//no errors
try {
    console.log('Start of try runs');
    console.log('End of try runs');
} catch (err) {
    console.log('Catch is ignored, because there are no errors');
}
console.log("...Then the execution continues");

// with errors
try {
    console.log('Start of try runs');
    lalala; // error, variable is not defined!
    console.log('End of try (never reached)');
} catch (err) {
    console.log(`Error has occured!`);
}
console.log("...Then the execution continues");

//error details

/*try {
    lalala; // error, variable is not defined!
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at ...
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
}*/
//custom errors
let json = '{ "age": 30 }'; // incomplete data
try {
    let user = JSON.parse(json); // <-- no errors
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }
    console.log(user.name);
} catch (e) {
    console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}

//multi-level try catch  //rethrow
function readData() {
    let json = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!
    } catch (e) {
        // ...
        if (e.name != 'SyntaxError') {
            throw e; // rethrow (don't know how to deal with it)
        }
    }
}

try {
    readData();
} catch (e) {
    console.log("External catch got: " + e); // caught it!
}

//try,catch,finally
try {
    console.log('try');
    if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}

//another example of try,catch,finally
// let num = +prompt("Enter a positive integer number?", 35)

// let diff, result;

// function fib(n) {
//     if (n < 0 || Math.trunc(n) != n) {
//         throw new Error("Must not be negative, and also an integer.");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//     result = fib(num);
// } catch (e) {
//     result = 0;
// } finally {
//     diff = Date.now() - start;
// }
// console.log(result || "error occured");
// console.log(`execution took ${diff}ms`);

//finally executes before return
function func() {
    try {
        return 1;
    } catch (e) {} finally {
        console.log('finally');
    }
}
console.log(func()); // first works alert from finally, and then this one

//Extending errors
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function test() {
//     throw new ValidationError("Whoops!");
// }

// try {
//     test();
// } catch (err) {
//     console.log(err.message); // Whoops!
//     console.log(err.name); // ValidationError
//     //console.log(err.stack); // a list of nested calls with line numbers for each
// }

//another example
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Usage
function readUser(json) {
    let user23 = JSON.parse(json);

    if (!user23.age) {
        throw new ValidationError("No field: age");
    }
    if (!user23.name) {
        throw new ValidationError("No field: name");
    }

    return user23;
}

// Working example with try..catch
try {
    let user23 = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // unknown error, rethrow it
    }
}