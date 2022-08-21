// Filter Method
// same as map method but only return the true statement let's see what I am talking about

//Suppose I have an array with some number and I have to create a new array with even numbers form the array I have looks like filtering the even numbers from the array

const numbers = [1,2,3,4,5,6,7,8,9];

function isEven(number){
    return number%2===0;
}
function isOdd(number){
    return number%2!==0;
}

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);
console.log(evenNumbers)
console.log(oddNumbers)