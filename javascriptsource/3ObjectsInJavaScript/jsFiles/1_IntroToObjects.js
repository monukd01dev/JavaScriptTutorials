//objects reference type all reference type store in same way in memmory
// arrays are good but not sufficient
// for real world Data 
// objects store key value pairs 
// objects don't have index

// how to create objects
//                   key    value
//                    /       /
// const employe = {name:"Manish KD",essn: 01, department: "IT"};//we use curly braces to create objects
// key is also known as properties

const employe = {
    name:"Manish KD",                     //
    essn: 01,                             // by default all keys are strings
    department: "IT",                     //
    skills: ['HTML','CSS','JavaScript']   //
};

console.log(employe);

// how to access data from objects
console.log(employe.name)
console.log(employe["skills"]); // by default all keys are strings that's why we have used "" in [] braces

// how to add key value pair to objects
// employe.gender = "male"; //adding key value pairs using . operator
// console.log(employe);
employe["gender"]= "male"; //adding key value pairs using [] braces   
console.log(employe);
