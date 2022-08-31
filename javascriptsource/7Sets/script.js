// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only  (no duplicates allowed)

const numbers = new Set([1,2,4,5,3,5])
numbers.add(6)
console.log(numbers);

console.log(numbers[1], "it shows undefined because of no index based access");

// adding values in empty set
const array = ['i','am','array']

const num = new Set();
num.add(4)
num.add(5)
num.add(0)
num.add(9)
// we can store different data types in sets
    num.add(array)//this will add
    num.add(array)//this will not because of duplication
    num.add(['i','am','array'])// added
    num.add(['i','am','array'])// added because this will located in different memory location in array
// when we create a new array a new memory located it doesn't matter that there elements are same 

console.log(num);



// has method 
// used to find the element present or not if element founded it will return true
// for example I have to check 1 is present in num or not

console.log(num.has(1));

const myArray = [2,3,3,4,6,7,1,4,8,9];
const uniqueElements = new Set(myArray)
console.log(uniqueElements);
console.log(myArray);

// let iterate the sets
    // for (const element of uniqueElements) {
    //     console.log(element);
        
    // }

// let use the length property on sets
console.log(uniqueElements.length);
// length property doesn't work on sets
let i=0;
for (const element of uniqueElements) {
    i++;
    
}
console.log(i);




