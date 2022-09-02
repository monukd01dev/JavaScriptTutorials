// call apply bind imp 4 interview

console.log("lets create an function");
function hellow() {
    console.log('helo');
}

console.log("\n>> Showing the working of Call()\n\n");

// we can use call for calling a function

hellow.call();
console.log("");//just for a new line

console.log("but it will do more than just calling\n\n");

console.log("lets see the real magic");

console.log("\ncreating two objects stud1 and stud2");

const stud1={
    firstName : "Chooturam",
    rating: -1,
    jankari : function(){
        console.log(`College : ${this.firstName} and rating : ${this.rating}`);
        
    }
}
const stud2={
    firstName : "Mooturam",
    rating: 0,
      
}

console.log("In stud1 we have a method named as jankari but stud2 doesn't but stud2 borrow it from stud1 let see how\n\n");

stud1.jankari.call(stud2);

console.log("\nbut what we have passed as argument from call, basically we have passed the value of this now the value of the this is stud2, if I changed it to stud1 it will print the stud1 method");

console.log("\nScene Change");

function iWill (){
    console.log("combine me with your objects");
}

//objects
const student_2={
    firstName: "monu",
    branch: "Computer Engineering",
    // no need to add method here

}
const student_3={
    firstName: "lalit",
    branch: "Computer Engineering",
    // no need to add method here

}


function printinfo (lastName,rollNo) {
    console.log(`${this.firstName} from ${this.branch} last name : ${lastName} and roll No : ${rollNo}`);
}

// printinfo.call(student_2);
 printinfo.call(student_2,"kd",31);//how to pass arguments 

console.log("\n\n>>apply");

// apply 
// apply is same as call and internally it uses call to do work
// but in apply we pass our argument in an array.
printinfo.apply(student_3,["Kumar Gupta",28]);

console.log("\n\n>>bind");

// bind
// it return a function

const functionCollector = printinfo.bind(student_2,"kd",32)
functionCollector();

