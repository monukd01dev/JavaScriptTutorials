// fill method
// value , start , end

// I have to make an array and fill it with 22 [22,22,22,22]

const myArray = new Array(22).fill(22);
console.log(myArray);

// I am replacing the 3,4,5,6 with 22
const array = [1,2,3,4,5,6,7,8,9];
// array.fill(value,startIndex,endIndex);
array.fill(22,2,6);//end index not included

console.log(array)
