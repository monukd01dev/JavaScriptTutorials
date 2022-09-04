// function CreateUser(fName,lName,age,email) {
//     this.firstName = fName;
//     this.lastName = lName;
//     this.age = age;
//     this.email = email; 
    
// }
// CreateUser.prototype.about = function(){
//     console.log(this.firstName,this.lastName);
    
// }
// CreateUser.prototype.is18=function(){
//     return this.age >= 18;

// };
// CreateUser.prototype.showemail=function(){
//     return this.email;
// };

// const user1 = new CreateUser("monu","kd",3,"example");

// now from starting we are trying to improvice our code and reducing the line of codes and complexity in writing the code still in our above code we are doing a tedious work everytime when we add a new method we have to write CreateUser.prototype.mehtodName = function, now its time to resolve this 

// and how we do that we do that by using and ES6 keyword called class
// in classes we difine the properties and methods inside the class

// class are fake in javascript
// because internally the work is done in same way as we have done it earlier

class CreateUser {
    constructor(fName,lName,age,email){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.email = email; 
    }

    // we can define our methods here
    about(){
        console.log(this.firstName,this.age);
        
    }
    is18(){
        console.log(this.age>=18);
        
    }
    showEmail(){
        console.log(this.email);
        
    }
}

// here one thing to always remind that you can not invoked constructor function without using new keyword

const user1 = new CreateUser("monu","kd",3,"example");
user1.about();
console.log(Object.getPrototypeOf(user1)); 