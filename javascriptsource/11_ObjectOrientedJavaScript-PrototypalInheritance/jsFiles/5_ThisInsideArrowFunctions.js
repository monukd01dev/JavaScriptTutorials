// this inside arrow functions
// this will not work in arrow function
// value of this in arrow function is 1 level up
// it will not work even if you set the value of this by call method

// let's see

const user1 ={
    firstName : "Monu",
    age: 18,
    about : ()=>{
        console.log(this);
        console.log(`My name is ${this.firstName} and my age is ${this.age}.`);
    }
}

user1.about();
user1.about.call(user1);