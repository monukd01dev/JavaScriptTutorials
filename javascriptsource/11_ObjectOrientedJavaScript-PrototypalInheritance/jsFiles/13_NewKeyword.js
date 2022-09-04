// new keyword must asked in interviews

console.log("till now what we have done");
console.log("\n1. We have created a constructor function called create user.\n2. And declared our methods in prototype object.\n3. Then linked prototype object and constructor function with __proto__.");


//constructor function createUser
/*function createUser(firstName, lastName, email, age, address) {

    const user =Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
};

createUser.prototype.about=function(){
                return `${this.firstName} is ${this.age} years old`;
            };
        
createUser.prototype.is18=function(){
                return this.age >= 18;
            
            };
createUser.prototype.showemail=function(){
                return this.email;
            };


const user1 = createUser("Monu","KD","monukdo1dev",18,"example");
const user2 = createUser("Lalit","Kumar","example@gmail.com",18,"example");
const user3 = createUser("Amit","Kumar","example@gmail.com",17,"example");

console.log(user1.showemail(),user1.is18());
*/

console.log("\n>> Now I will write the same logic using new keyword then we talk about what is new keyword doing.");


function CreateUser(fName,lName,age,email) {
    //creating the object and chaining it with prototype is done by new
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email; 
    // returning the object is also done by new   
}
CreateUser.prototype.about = function(){
    console.log(this.firstName,this.lastName);
    
}
CreateUser.prototype.is18=function(){
    return this.age >= 18;

};
CreateUser.prototype.showemail=function(){
    return this.email;
};

const user1 = new CreateUser("monu","kd",3,"example");
user1.about();
user1.age = 19;
console.log(user1.is18());


console.log("\nNow what is new key doing let's see:\n1. Creating an empty object {}.\n2. Assigning that object to this, this = {}.\n3. Set the value of __proto__.\n4. And returnig this.");

console.log("\nsuppose you have create so many functions how you find out which one you have to call using new keyword\n that's why we alway write the function name first letter capital whome we have to call using new keyword");




