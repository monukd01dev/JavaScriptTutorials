// difference between dot and bracket notaion

// suppose you want to name the skills key as student skills but the problem is that you can't add space between the names see from line 11

const student ={
    name: "Manish Kumar",
    id: 200501163,
    phone: 8588547896,
    email: "manishkd01dev@gmail.com",
    dept: "CSE",
    // student skills: ['Html','Css','JavaScript','Java'] // this will throw an error
    //so we can write like that
    "student skills" : ['Html','Css','JavaScript','Java']
    //but read line no 17
};

//let's try to access student skills
// console.log(student.student skills);
// but it is throwing an error because of the space
console.log(student["student skills"]);//this will work fine

//now I'll create a key rollno outside of object
const key = "rollno";
// and now what I want is that when I initialize key with 31 then it will output like this rollno = 31
// let see how we do that

// student.key = 31;
console.log(student.rollno);//key name not changed to rollno
// student["key"] = 31;
console.log(student["rollno"]);// still doesn't work
student[key]= 31;
console.log(student.rollno);//
console.log(student["rollno"]);// 
console.log(student);
// both of the declaration in line 27 and 29 both created a new key value pair with the name of key
