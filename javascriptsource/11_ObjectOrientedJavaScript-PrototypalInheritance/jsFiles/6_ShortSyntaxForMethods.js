// short syntax for creating methods

console.log("long one");

const user1 ={
    firstName : "Monu",
    age: 18,
    about : function (){
        console.log(`My name is ${this.firstName} and my age is ${this.age}.`);
    }
}

console.log(user1);


console.log("short one");

const user2 ={
    firstName : "Lalit Kumar Gupta",
    age: 18,
    about(){//difference is here
        console.log(`My friend name is ${this.firstName} and his age is ${this.age}.`);
    }
}
console.log(user2);
