// what I have coded first
/*function createObject (fName,lName,email,age,address){
    return {
        firstName : fName,
        lastName : lName,
        email : email,
        age: age,
        address: address,
        
    }

}

const user1 = createObject("monu","kd","monukd01dev@gmail.com",18,"A/15,street no 3");

console.log(user1.firstName);
console.log(user1.address);
*/

console.log("create a function:\n\n1. that create object.\n2. add key value pair.\n3. return an object.");

console.log("");

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

console.log(createUser);

console.log("\nsee the working");
const user1 = createUser("Monu","KD","monukdo1dev",18,"example");

console.log(user1);

console.log(user1.about());

console.log(user1.is18());





