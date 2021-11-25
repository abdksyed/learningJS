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

// ? Why no var and just calling Math imports it? or it's already present in global?
displayDiscount = Math.round(discount);
console.log(`${displayDiscount}%`);