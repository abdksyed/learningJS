// # Array

var someArray = [1, 2, 3, 4, 5];

var someArray = new Array(1, 2, 3, 4, 5); // Modern Approach

console.log(someArray);
// > [1, 2, 3, 4, 5]

console.log(someArray[0]);
// > 1

someArray[3] = 'four';

console.log(someArray);
// > [1, 2, 3, 'four', 5]

someArray.pop()
someArray.pop()
console.log(someArray);
// > [1, 2, 3]

someArray.push('three plus one');
someArray.push('three plus two');
console.log(someArray);
// > [1, 2, 3, 'three plus one', 'three plus two']

someArray.shift();
console.log(someArray);
// > [2, 3, 'three plus one', 'three plus two']

someArray.unshift('one');
console.log(someArray);
// > ['one', 2, 3, 'three plus one', 'three plus two']

console.log(someArray.length);
// > 5

console.log(someArray.indexOf('three plus one'));
// > 3

console.log(someArray.indexOf('I am not in the array'));
// > -1

console.log(Array.from('String 2 Array'));
// > ['S', 't', 'r', 'i', 'n', 'g', ' ', '2', ' ', 'A', 'r', 'r', 'a', 'y']


console.log('-------------------------------------');

var isEven = function(element) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

console.log([2,4,6,8].every(isEven));
// > true
console.log([2,4,7,8].every(isEven));
// > false

console.log([1,3,5,2,9].some(isEven));
// > true
console.log([1,3,5,7,9].some(isEven));
// > false

// ## Basic the Call Back Function to every directly.

console.log( [2,4,6,8].every( (e) => {return e%2===0} ) ) // return compulsory when using {} here
// > true

console.log( [2,4,6,8].every( (e) => {e%2===0} ) ) // return is not there, so it automatically return undefined, hence false
// > false

console.log( [2,4,6,8].every( (e) => (e%2===0) ) )
// > true

console.log( [2,4,6,8].every( e => e%2===0 ) )
// > true

console.log('-------------------------------------');

var someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// fill(number, [start, end])
// IMPORTANT: fill is `inplace` operation.

console.log(someArray.fill('x'));
// > [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]

console.log(someArray);
// > [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]

var someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(someArray.fill('y', 3));
// > [0, 1, 2, 7, 7, 7, 7, 7, 7, 7]

var someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(someArray.fill('z', 3, 6));
// > [0, 1, 2, 7, 7, 7, 7, 7, 7, 7]

// filter(callBackFn)
// callBackFn(element, [index, array])
var someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log( someArray.filter( (e) => e%2===0 ) );


console.log('-------------------------------------');

// Slice and Splice

var againSomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// slice([start, end])

console.log(againSomeArray.slice(3, 6));
// > ['d', 'e', 'f']

console.log(againSomeArray.slice(3));
// > ['d', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(againSomeArray.slice(-3));
// > ['g', 'h', 'i']

console.log(againSomeArray.slice(-3, -1));
// > ['g', 'h']

console.log(againSomeArray.slice());
// > ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(againSomeArray.slice(0,100_000));
// > ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log('-------------------------------------');

// splice(start, [deleteCount, [element1, element2, ...])
// splice operation is in place, it will remove elements from
// array starting from start index.
// `deleteCount` is optional argument, which takes a number and
// deletes the number of elements from the array starting from
// start index.
// `element1, element2, ...` are optional arguments, which
// are inserted into the array in the place of removed elements.
// There can be any number of elements inserted.

var againSomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var poped_out = againSomeArray.splice(3)
console.log(poped_out);
// > ['d', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(againSomeArray);
// > ['a', 'b', 'c']


var againSomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var poped_out = againSomeArray.splice(3, 4)
console.log(poped_out);
// > ['d', 'e', 'f', 'g']
console.log(againSomeArray);
// > ['a', 'b', 'c', 'h', 'i', 'j']


var againSomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
poped_out = againSomeArray.splice(3, 4, 'ONE')
console.log(poped_out);
// > ['d', 'e', 'f', 'g']
console.log(againSomeArray);
// > ['a', 'b', 'c', 'ONE', 'h', 'i', 'j']


var againSomeArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
poped_out = againSomeArray.splice(3, 4, 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN')
console.log(poped_out);
// > ['d', 'e', 'f', 'g']
console.log(againSomeArray);
// > ['a', 'b', 'c', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'h', 'i', 'j']


console.log('-------------------------------------');

// # Object


