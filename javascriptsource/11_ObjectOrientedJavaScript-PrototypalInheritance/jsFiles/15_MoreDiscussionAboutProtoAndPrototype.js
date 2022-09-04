let numbers = [1,2,3,4];
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

console.log("but we have learnd earlier that only functions have prototype but array also have it how");

// let's see an another way to create an array 
const nameOfArray = new Array(1,2,3,4,5);// internally in javaScript array is created by using array constructor function which have its prototype and each method is stored in it 
console.log(nameOfArray);

function hellow() {
    console.log("helo");
    
}

console.log(hellow.prototype);
console.log(Object.getPrototypeOf(numbers));

console.log("now you can see that hellow functions prototype is in object and numbers prototype is in array and earlier we studied that prototype is an object");

hellow.prototype=[];
console.log(hellow.prototype);

console.log("now I have canged the hellow functions prototype from an object to an array. this show that you can changed it and the person who created js he thought that array prototype must be in array");

console.log("on line no 17 I had tried to print the prototype of numbers using numbers.prototype but it doesn't because this will not work with objects it only work with funtions and if I have to print the prototype of numbers I have to use the method calle Object.getPrototypeof(objectName)");


const user1 = {fname:"monu"};
console.log(user1.prototype);// it output as undefined
console.log(Object.getPrototypeOf(user1));
// as I said it works
console.log(Object.prototype);// it is not related to above, I am trying something..

console.log(Array.prototype);

// I am trying to print the properties of object using forin loop but it works on only object and Object is a class here

// getPrototypeOf() method returns the prototype of the specified object. The getPrototypeOf() method, being a static method, is called using the Object class name.













