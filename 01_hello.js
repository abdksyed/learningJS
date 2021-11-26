console.log('Hello World!');
// > Hello World!

console.log(fullName); //Hoisting
// > undefined

var fullName = 'ThisIsMyName';
console.log(fullName);
// > ThisIsMyName

var amICorrect = true;
console.log("Am I Correct?", amICorrect);
// > Am I Correct?  true

var myNumber = 47;
console.log(myNumber);
// > 47

var noVar;
console.log(noVar);
// > undefined
noVar = "I'm not a variable";
console.log(noVar);
// > I'm not a variable

var takeInput;

// takeInput = prompt("Give me some Input"); //Open a pop-up in browser. 

// Interpolation
console.log(`
    This is a multi-line
    string.
    Where I can even call
    variables. like ${fullName}
    and ${myNumber}.
`)
// >
//      This is a multi-line
//      string.
//      Where I can even call
//      variables. like ThisIsMyName
//      and 47.

// Notice the Output starts from 2nd line and has space in the beginning, this is
// because we started out multi-line from 2nd line and had tab space.

//  OPERATORS

var listPrice = 799
var salePrice = 199
var discount = ( (listPrice - salePrice)/listPrice ) * 100;
console.log(`${discount}%`);
// > 75.09386733416771%

// ? Why no var and just calling Math imports it? or it's already present in global?
displayDiscount = Math.round(discount);
console.log(`${displayDiscount}%`);
// > 75%

console.log(typeof discount);
// > number
console.log(typeof displayDiscount);
// > number
console.log(typeof fullName);
// > string
console.log(typeof amICorrect);
// > boolean


// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Conditionals

if (' ') {
    console.log('This is True');
}
// > This is True

if (1) {
    console.log('This is True');
}
// > This is True

if ('FALSE'){
    console.log('This is True');
}
// > This is True

if (true) {
    console.log('This is True');
}
// > This is True

if (false) {
    console.log('This is NOT going to be Printed');
}
// >

if (0) {
    console.log('This is NOT going to be Printed');
}
// >

if (''){
    console.log('This is NOT going to be Printed');
}
// >

if (null){
    console.log('This is NOT going to be Printed');
}
// >

if (0) {
    console.log('This is NOT going to be Printed');
}
// >

var iAmGoingToBeUndefined;
if (iAmGoingToBeUndefined) {
    console.log('This is NOT going to be Printed');
}
// >

// 0, false, '',  null, NaN, undefined are `Falsy` values
// Anything else is `Truthy`
// ? No idea on empty list(array) or empty dictionary(object)

// Condtional Operators

var isEmployee = true;
var isLoggenIn = true;
var isAdmin = true;

if (isEmployee) {
    if (isLoggenIn) {
        if (isAdmin) {
            console.log('Welcome Mr. Adminva');
        }
    }
}
// > Welcome Mr. Adminva

// Better

if (isEmployee && isLoggenIn && isAdmin) {
    console.log('Welcome Mr. Adminva');
}
else {
    console.log('You are not authorized');
}
// > Welcome Mr. Adminva 

var isMom = false;
var isDad = false;
var isSister = true;

if (isMom || isDad || isSister) {
    console.log('You are a family member');
}
else {
    console.log('Kaun hai miya tum??r');
}
// > You are a family member


// Ternary Operator

var authenticated = true;

if (authenticated) {
    console.log('Welcome');
}
else {
    console.log('Show login Options');
}

console.log(authenticated ? 'Welcome' : 'Show login Options');

// Switch and Case Statements

var userType = 'Analyst';

switch (userType) {
    case 'Manager':
        console.log('Welcome Manager');
        break;
    case 'Admin':
        console.log('Welcome Admin');
        break;
    case 'Developer':
        console.log('Welcome Developer');
        break;
    case 'Tester':
        console.log('Welcome Tester');
        break;
    case 'Analyst':
        console.log('Welcome Analyst');
        break;
    default:
        console.log('Welcome');
} 

// Type Coercion

console.log("2" + 2);
// > 22
// Here JS is converting `number 2` to string and then adding `string 2` to it.
// This is done by Java Script under the hood. 

console.log("2" + "2");
// > 22

var user = 2;
if (user == "2"){
    console.log('Condition should be false, but........ Why Am I getting Printed???');
}
// > Condition should be false, but........ Why Am I getting Printed???

var user = "2";
if (user == 2){
    console.log('Condition should be false, but........ Why Am I getting Printed???');
}
// > Condition should be false, but........ Why Am I getting Printed???

// As we can see the var user is different type than being matched in if statement,
// but it's still giving true and executing the console.log statement.
// This is because we are using `==` which is a weak(loosely) matching.
// It checks if value is `2` irrespective of the type.

var user = 2;
if (user === "2"){
    console.log('Condition should be false, and I will NOT be printed');
}
// >

var user = "2";
if (user === 2){
    console.log('Condition should be false, and I will NOT be printed');
}
// >