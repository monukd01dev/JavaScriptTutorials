//array destructuring came in ES6
// const myArray = ["value1","value2"];
// // let var1 = myArray[0];//_________>___________
// // let var2 = myArray[1];//                     |
// // console.log(var1);//                         |   
// // console.log(var2);//                         |internally both are same
// //                                              |
// let [var1,var2,var3]=myArray;//<----------------|
// console.log(var1);
// console.log(var2);

console.log('\nQ1. what if myArray have value3 ? \nAns. Nothing will happen.');
const myArray = ["value1","value2","value3","value4","value5"];
// let var1 = myArray[0];//_________>___________
// let var2 = myArray[1];//                     |
// console.log(var1);//                         |   internally both are same
// console.log(var2);//                         |
//                                              |
// let [var1,var2,var3,var4]=myArray;//<--------|
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);

console.log('\nQ1. what if I have to store value3 in var2 ? \nAns. For that you have to skip one index like shown below.');

// let [var1,,var2]=myArray;
// console.log(var1);
// console.log(var2);

console.log('\nQ1. what if I have to store value1,value2 in var1,var2 and rest into an array myNewArray ? \nAns. You have to use spread operator.');

let [ var1,var2, ...myNewArray]=myArray;

console.log(var1);
console.log(var2);
console.log(myNewArray);


//creating undefiend constant in js using array destructuring

const n1 = NaN;

console.log(n1)
