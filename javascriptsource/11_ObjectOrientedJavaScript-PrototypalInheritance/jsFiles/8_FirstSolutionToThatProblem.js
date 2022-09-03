// problem in previous code
/*
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("Monu","KD","monukdo1dev",18,"example");
const user2 = createUser("Lalit","Kumar","example@gmail.com",18,"example");
const user3 = createUser("Amit","Kumar","example@gmail.com",18,"example");
*/

// now the above code work perfectly fine so what's the problem in it let's see it
// everytime I create a user an object is created with two methods and for every object method is same but we are creating that same method for every object suppose if you have to create a million object(million users) each time a new memory is located for those methods in each object and that not good for our memory 

// let's resolve this problem
const userMethods = {
    about(){
        return `${this.firstName} is ${this.age} years old`;
    },

    is18(){
        return this.age >= 18;
    
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;//difference is here
    user.is18 = userMethods.is18;//difference is here
    return user;
}

const user1 = createUser("Monu","KD","monukdo1dev",18,"example");
const user2 = createUser("Lalit","Kumar","example@gmail.com",18,"example");
const user3 = createUser("Amit","Kumar","example@gmail.com",17,"example");

console.log(user3.about(),user3.is18());


// now we have solved our previous problem but we have one more problem which is, whenever you add an new method in userMethods you have to referenced it to createUser and if you forget you end up with some errors lets resolve this with __proto__
