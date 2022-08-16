// primitive vs reference data type
let num1 = 2;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log('after increment the num1');
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);

// reference type
// array
let array1 = [1,2,3];
let array2 = array1;
console.log(array1===array2)
console.log('array1',array1);
console.log('array2',array2);
array1.push(4);
console.log('after pushing value 3');
console.log('array1',array1);
console.log('array2',array2);
