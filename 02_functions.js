function someFunction() {
    console.log("This is being run inside a function");
}

someFunction();
// > This is being run inside a function

console.log(someFunction);
// > [Function: someFunction]

console.log(someFunction());
// > This is being run inside a function
// > undefined

// It runs the console log of the function, but also prints undefined,
// that is due to fact that the someFunction is not returning anything.

console.log('-----------------------------');

// # Context

var someVar = 'someVar'
if (someVar === someVar) {
    console.log(someVar);
}
// > someVar

// In browser the global context is the window object.
// So the below code will work perfectly well in Browser.
/*
var someVar = 'someVar'
if (someVar === windows.someVar) {
    console.log(someVar);
}
*/
console.log('-----------------------------');

// # Hoisting

console.log(varDeclaredBelow);

var varDeclaredBelow = 'I am declared below';

console.log(varDeclaredBelow);

// ## Hoisting Functions

callingFunction();
// > I am being called

function callingFunction() {
    console.log('I am being called');
}

// callingVarFunction();
// Calling this here will throw an error
// > TypeError: callingVarFunction is not a function

var callingVarFunction = function () {
    console.log('I can be only called below my decleration');
}

callingVarFunction();
// > I can be only called below my decleration

// During the Memory Creation Phase(Variable Enviorment) the function code is
// copied to the memory and stored there. So when the function is called during
// code execution phase (Thread of Execution) the function code is executed.
// as it's already in the memory.

// But during the Memory Creation Phase(Variable Enviorment) the variables are
// created and stored as undefined. And only durign the code execution phase
// the values are assigned to variables. So if the variable are executed before
// decleration then the value will be undefined, as it's stored as undefined.

console.log('-----------------------------');

// # Scope Chain

var globalVar = 'I am Global';

console.log(`In Global Scope: ${globalVar}`);
// > In Global Scope: I am Global

function global2LocalFunction() {
    var globalVar = 'I am Local';
    console.log(`In Local Scope where globalVar is re-initialized: ${globalVar}`);
}

function global2LocalFunction_2() {
    console.log(`In Local Scope where globalVar is NOT re-initialized: ${globalVar}`);
}

global2LocalFunction();
// > In Local Scope where globalVar is re-initialized: I am Local
global2LocalFunction_2();
// > In Local Scope where globalVar is NOT re-initialized: I am Global

console.log(`In Global Scope: ${globalVar}`);
// > In Global Scope: I am Global

