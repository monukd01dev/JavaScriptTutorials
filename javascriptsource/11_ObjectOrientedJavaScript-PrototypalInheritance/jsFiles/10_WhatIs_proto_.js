const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3"
// }


// const obj2 ={};
const obj2 = Object.create(obj1); // this return an empty object
obj2.key3 = "value3";
// obj2.key1 = "unique";
console.log(obj2.key1);// this is happening

console.log("in line no 10 we have created an empty object but there is one more way to create empty object");

console.log(obj2);

// __proto__
// official ecmascript documentation
// [[prototype]]

// __proto__ === [[prototype]]

// but there is one more thing called prototype which is completely different from above

console.log(obj2.__proto__); // this will return the obj1
// console.log(obj2.[[Prototype]]); this is not working just trying out


// trying out something
// const obj3 ={
//     firtName : "monuKd",
//     age: 18,
// }
// const obj4 = {
//     __proto__:obj3
// }

// console.log(obj4.firtName);

//what is happening
// we are doing prototype chaining
