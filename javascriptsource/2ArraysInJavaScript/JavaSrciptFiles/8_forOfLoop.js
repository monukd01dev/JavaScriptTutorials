// for of loop its a type of loop for representing the array elements fastly
// for of loop gives elements
const array = ['hello','there','istudied','less','today'] ;
for (const arrays of array) {
        console.log(arrays);
}

// this program reverse the entered number
const enterdNumber = [1,2,3,4,5];
const resultantArray =[];
for (const numbers of enterdNumber) {
    // here number is doing the work of enterdNumber[i++]
    resultantArray.unshift(numbers);
    
}
console.log(resultantArray);

let a = 1, c=1;
let b = a++;
let d = ++c;
console.log(b,d)

