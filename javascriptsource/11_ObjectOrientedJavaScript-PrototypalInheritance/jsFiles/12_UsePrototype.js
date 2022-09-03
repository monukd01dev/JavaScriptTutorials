// const userMethods = {
//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18(){
//         return this.age >= 18;
    
//     },
//     showemail(){
//         return this.email;
//     }
// }

function createUser(firstName, lastName, email, age, address) {

    const user =Object.create(createUser.prototype)
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
