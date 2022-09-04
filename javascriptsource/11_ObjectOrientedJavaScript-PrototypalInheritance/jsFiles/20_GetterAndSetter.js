// getter and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName =firstName;
        this.lastName=lastName;
        this.age=age;
    }
    
    get fullName(){// difference is here
        return `${this.firstName} ${this.lastName}`;
    }

    // setFullName(firstName,lastName){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    // }
    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ")// what split doing is [Lalit,Kumar]
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1 = new Person("Monu","Kumar",18);
console.log(person1);

// console.log(person1.fullName()); // here when I have to use fullName method i have to put () after fullName and I forgot to add that it'll output the full method
console.log(person1.fullName);// showing the whole method

// and we want that above code will give the desired output not undefined
// so we gonna use get to use method as properties



// now we see the working of set
// now I have to set the fullName so I have created a method setFullName
// person1.setFullName("Lalit","Kumar");
// console.log(person1.fullName);

// but what I want is that when I write : person1.fullName = "Lalit Kumar"
//so I'll use set for this

person1.fullName = "Lalit Kumar";
console.log(person1.fullName);