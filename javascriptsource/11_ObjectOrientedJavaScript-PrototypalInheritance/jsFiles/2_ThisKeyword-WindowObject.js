// Window object

console.log("In our prevoius file I have tried to print this 'console.log(this)'");


console.log(this);

console.log("\nthis outputs the global object called window\n\n");
console.log(window===this);

console.log("window contain all function");

function hellow (){
    console.log("helo");
    
}

console.log("\nnow function hellow become an method for window because it is declare inside the global object");

console.log(window);


this.hellow();
window.hellow();

// see this imp 4 interview 

function myfunc() {
    "use strict"
    console.log(this);
    // this will print the window object
    // to avoid this we use "use strict"
}
myfunc();
// now its output change to undefined






