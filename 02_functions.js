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

// Context

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

