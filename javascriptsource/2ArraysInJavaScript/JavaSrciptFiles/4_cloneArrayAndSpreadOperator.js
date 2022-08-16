// clone and concatenating array
// layman method to clone array
let array1 = [1,2,3];
// let array2 = [1,2,3];


// using slice method to clone
// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat([4,5,6]);

// using concatenating array
// let array2 = [].concat(array1);
// let array2 = [].concat(array1,[4,5]);

// using spread operator
// let array2 = [...array1];
let array3 = [4,5,6,7];
// let array2 = [...array1,4,5,6];
let array2 = [...array1,...array3];

// output code
console.log(array1===array2);
console.log(array1);
console.log(array2);