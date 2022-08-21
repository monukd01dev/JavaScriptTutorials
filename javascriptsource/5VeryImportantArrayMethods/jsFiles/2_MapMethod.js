// mapMethod
// mostly use in react
// Argument -> element and index
// return -> A new array 
// this function must return something
// map take input as a call back function expample -> arrayName.map(callbackFunctions)

const numbers = [2,5,7,4,6,8];

// const newArray = numbers.map((number,index)=>number*index);
// console.log(newArray);

// but what will happen if you not return anything it will return undefined
const newArray = numbers.map((number,index)=>console.log(number*index));

console.log(newArray);

// that's why it is crurical to return 

// real life example

// I have to store the username in a new Array

const users = [
    {firstName : "jim", age:24},
    {firstName : "kim", age:30},
    {firstName : "park", age:22},
    {firstName : "chull", age:25},
    {firstName : "chung", age:23}
]

const userName =users.map(user=>user.firstName)

console.log(userName);

// lets replicate the above code without the map method

const youName=[];
for (let i = 0; i < users.length; i++) {

     youName.push(users[i].firstName);
    
}
console.log(youName)
