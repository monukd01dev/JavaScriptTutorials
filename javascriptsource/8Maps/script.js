// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like objects)
// duplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have stings or symbol as key

// in maps you can use anything as key 
// like array, number, string



// // Object literals
// // key -> string
// // key -> symbol
const person = {
    firstName : "monu",
    age : 19,
    1 : "one",
}

// console.log(person.firstName);
// console.log(person["age"]);
console.log(person['1']);


for (const key in person) {
    console.log(typeof key);
    
}


// key value pair

const person2 = new Map(); // empty map
console.log(person2,'empty map');

// adding key value pair in map using set
person2.set('firstName','monu Kumar')
person2.set(1,'one')
console.log(person2);

// accessing key values in map using get
console.log(person2.get('firstName'));
console.log(person2.get(1));

// printing all keys without value
console.log(person2.keys());// MapIterator
// .keys() give all te key in an array to we can use for of loop to iterate the key name 
for (const key of person2.keys()) {
    console.log(key, typeof key)
    
}

// we can't use for of loop in objects but maps are iterables so we can use for of loop on maps
console.log('iamhere');

for (let key of person2) {
    console.log(key);   
    
}

// now in key we are getting arrays with first index as key and second as value
// recall array destructuring

// for (let key,value of person) { // give error
//     console.log(key);   
    
// }
for (let [key,value] of person2) {
    console.log(key, value);   
    
}
const employee = new Map([['name','monu'],['age',19]])
console.log(employee);

// real life example

const person1 = {
    id : 1,
    name : 'jack'
}

const extraInfo = new Map();
extraInfo.set(person1,{age:13, gender:'male'})
console.log(person1.name);
console.log(extraInfo.get(person1).age);

