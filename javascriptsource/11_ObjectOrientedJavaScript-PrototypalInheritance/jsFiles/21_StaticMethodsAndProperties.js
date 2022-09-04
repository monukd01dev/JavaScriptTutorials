// static methods and properites
class Person{
    constructor(firstName,lastName,age){
        this.firstName =firstName;
        this.lastName=lastName;
        this.age=age;
    }

    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const[firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
    static classInfo(){
        console.log("giving info about class");
        
    }
    static propety ="static property";
}

const person1 = new Person("Monu","Kumar",18);
console.log(person1.fullName);

// methods and properties that are not related to object(instance) of class and can only be accessed by using the class name is known as static method and properites

// get and set fullName methods are related to object(instance)

// now I have created and static method called classInfo and you can't access it using properties
// let's see
// person1.classInfo();it give error
Person.classInfo();
console.log(Person.propety);
console.log(person1.propety);//give undefined


