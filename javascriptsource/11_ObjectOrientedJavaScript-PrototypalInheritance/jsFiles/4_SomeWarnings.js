
const user1 ={
    firstName : "Lalit Kumar Gupta",
    age: 18,
    about : function (){
        // console.log(this);
        console.log(`My friend name is ${this.firstName} and his age is ${this.age}.`);
        
        
    }
}


//don't do this mistake
let myfunc = user1.about;
// how the above code look internally
/*
    const myfunc = function (){
        // console.log(this);
        console.log(`My friend name is ${this.firstName} and his age is ${this.age}.`);
    }
 */
myfunc();

console.log("");
console.log("why the above output is undefined?\n>> because we have only passed the reference of the about function and the value of this is defined when we call the function if we check the value of this it contians global object(window).");

console.log("\nLet's see the solution to this");

myfunc = user1.about.bind(user1);// here bind return a function not the reference of function like code above 
myfunc();
console.log(myfunc);

