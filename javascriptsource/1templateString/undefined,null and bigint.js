//undefined
//null

console.log(`-----------------------Undefined-------------------------`);
let firstName;
console.log(firstName, typeof firstName);
// it output as undefined
// when a js variable are declared they have initial value and type both of undefined and if we perform mathematical operations on it we'll get NaN as output which means Not a Number
firstName += 1;
console.log(firstName);
// it output as NaN

// but this will not work with const
    // const firstName1;
// it shows an error on console screen
// Uncaught SyntaxError: Missing initializer in const declaration
// it says that you cannot declare a const without a value.

console.log(`-----------------------NuLL-------------------------`);
// Null means Null, 0 means 0 but null is null
let firstName2 = null;
console.log(firstName2,typeof firstName2, typeof null);
// there is a bug in js when you output the typeof null it will output as 'object' instead of null

// BigInt
console.log(`-----------------------BigInt-------------------------`);
// it came in js in 2020
 
let myNumber = BigInt(123) ;
console.log(Number.MAX_SAFE_INTEGER)
// there are two ways to declare a number BigInt
// 1. myNumber = BigInt(123);
// 2. myNumber = 123n;
console.log(myNumber);
 
// note you can't perform mathematical operation on bigint with a non bigint number lets see
// let myNumber2 = 12;
// console.log(myNumber + myNumber2);
// it output as
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//     at undefined,null and bigint.js:38:22

// to resolve this problem we have to make myNumber2 an BigInt
let myNumber2 = 12n;
console.log(myNumber + myNumber2);

