class Animal {//Now this is parent class
    constructor(name){
        this.name = name;
    }
    eat(food){
        console.log(`yeh! eating ${food}`);
        
    }
    showName(){
        console.log(`Your cute pet name is ${this.name}`);
        
    }
}
 const tom = new Animal("dog");
// tom.eat("peddygry")
class Dog extends Animal{ // and this is subclass
    // as a subclass of Animal it can use all the methods of the Animals
    // it can access the constructor of that class also 
    // it can control the behaviour of constructor
    // it can also override the methods 

    eat(food){
        console.log(`From dog class override the eat method`);
    }
    walking(){
        console.log("walking at 6pm");
        
    }
}

// lets create an instance(object) of Dog class
const labra = new Dog("tyson");
console.log(labra);

labra.eat("dhaniya");
labra.showName();
labra.walking();
// tom.walking();



