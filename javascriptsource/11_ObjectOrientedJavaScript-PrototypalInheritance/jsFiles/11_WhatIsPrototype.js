//what is prototype
function hellow(){
    console.log("helo world");
    
}
// javascript function ===> function + object

// and functions have so many properties like name property
console.log(hellow.name);

// you can add your own properties
hellow.myOwnProperty = "very unique value";
console.log(hellow.myOwnProperty);

// name property ---> tells function name;

// funtions provides more usefull properites.

console.log(hellow.prototype); // the prototype property provide an empty object with one property called constructor.

// only function provides prototype property


hellow.prototype.myname = "MonuKD";
console.log(hellow.prototype);

console.log(hellow.prototype.myname);

hellow.prototype.run = function(){
    return "I am running";
}

console.log(hellow.prototype.run());

// __proto__ is different it is reference ,it create chaining
// prototype is an object and only functions have that


// there is no connection in proto and prototype 
// but we can create connection between them