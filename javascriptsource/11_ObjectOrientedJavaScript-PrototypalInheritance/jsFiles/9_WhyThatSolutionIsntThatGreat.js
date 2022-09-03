console.log(">>> Solution to our previous problem ");
console.log("");

const userMethods = {
    about(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18(){
        return this.age >= 18;
    
    },
    showemail(){
        return this.email;
    }
}

function createUser(firstName, lastName, email, age, address) {
    // const user = {};//change is here

    const user =Object.create(userMethods)// this thing here is creating an empty object and chaining userMethods with user , and what is __proto__ it is reference.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser("Monu","KD","monukdo1dev",18,"example");
const user2 = createUser("Lalit","Kumar","example@gmail.com",18,"example");
const user3 = createUser("Amit","Kumar","example@gmail.com",17,"example");

console.log(user3.about(),user3.is18());
console.log(user3.showemail());


