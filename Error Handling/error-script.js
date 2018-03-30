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