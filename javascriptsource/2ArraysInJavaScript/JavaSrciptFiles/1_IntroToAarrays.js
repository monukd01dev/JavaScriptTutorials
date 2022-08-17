// intro to Arrays
// reference type
// what is arrays?
// collection of elements
// ordered collection of items

// how to create arrays
let friends = ['lalit','amit','krishna','ashu','ashish'];
console.log(friends);
friends[3]='Ashu Sagar';//this shows arrays are mutable
console.log(friends);
let number=[1,2,3,4,5,6,7];
console.log(number)

// in other programming languages array is defined as homogenious collection of ordered elements but in JavaScript it is heterogenious ordered collection of elements
console.log('<----------2nd Output------------>\n\n');

let mixed=[1,2,"string",null,undefined,];
console.log(typeof mixed)
console.log(mixed);


// some important talks
// all referenced type are called as object
// so array is an object in JavaScript
console.log(typeof number, typeof friends);

// but there are so may objects already present in js how will you find out that its an array or not
// for we use a function to check the array

console.log(Array.isArray(mixed));
