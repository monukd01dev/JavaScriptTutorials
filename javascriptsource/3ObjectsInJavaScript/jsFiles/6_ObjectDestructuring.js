console.log("\n<-------------------Object Destructuring------------------->\n\n");

const student = {
    name : "studentName",
    rollno: 31311323,
    clg: "GNDIT",
    sem: "5th"
};

// let {name,rollno} = student;
// console.log(name,rollno);

let {name:naam,rollno:number, ...clgDetail} = student;//you can't skip like array destructuring here
console.log(naam,number);
console.log(clgDetail);
