// Methods
// Funtions inside objects


function printinfo () {
    console.log(`${this.firstName} from ${this.branch}`);
    console.log(this);
    
}

console.log("let's See and example: here I am declaring an object called student_1");
const student_1 = {
    firstName : "Monu Kumar",
    branch: "Computer Engineering",
    // 1. way is declare the funciton as key value pair, where key is functions name and value is funtions itself

    // print: function() {
    //     console.log(`${this.firstName} from ${this.branch}`);
        
    // }

    // 2. Way is to declare the funtion outside the object and assing it to a key.

    print: printinfo
    // 3. way is written in 6th file shortsyntax
}
console.log(student_1);

console.log("\n Now I will call my method\n\n");

student_1.print();

console.log("And the output is so pleasing as we expected\n\n");

console.log("but the mai topic is what is this in our code, let's log the this to find out what is contains \n\n");

// console.log(studen_1.this); you cant access it like this
// console.log(this); and not like this also

console.log("For showing what it contains I have to add 'console.log(this)' inside the method\n\n");

student_1.print();

console.log("\n As you can see that it contains the whole object");

// lets see why we use that

console.log("\n suppose if you have so many objects and one method and you have assign this method to every object, have to create a new funtion for every object");

//creating some objects

const student_2={
    firstName: "Lalit",
    branch: "Computer Engineering",
    print: printinfo

}
const student_3={
    firstName: "Amit",
    branch: "Computer Engineering",
    print: printinfo

}
const student_4={
    firstName: "Krishna",
    branch: "Computer Engineering",
    print: printinfo

}
const student_5={
    firstName: "Ashu",
    branch: "Computer Engineering",
    print: printinfo

}
const student_6={
    firstName: "Ashish",
    branch: "Computer Engineering",
    print: printinfo

}

console.log("\nprinting the outputs\n\n");

student_1.print();
student_2.print();
student_3.print();
student_4.print();
student_5.print();
student_6.print();











