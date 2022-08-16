//how to iterate objects
const student = {
    name: "Manish Kumar",
    id: 200501163,
    phone: 8588547896,
    email: "manishkd01dev@gmail.com",
    dept: "CSE",
    "student skills": ['Html', 'Css', 'JavaScript', 'Java']

};

// for in loop
// Object.keys

// 1st for in loop

// for(let key in student){
//     console.log(key);
// }
// the above one only output the key name but we want key value pair

// for (let key in student) {
//     console.log(student.key);//this wil find the key with the name of key and we haven't defined any key with name of key
// }
//this will also not working 

// for (let key in student) {
//     console.log(student[key]);//this will change it to this student["name"]
// }
// but the problem is that will this is it will only print the value not key name and we want key value pairs

// so we can do that like this using template strings
for (let key in student)
{
    console.log(`${key}: ${student[key]}`)
}
// and that's what we want to output

// 2nd object.key

Object.keys(student);//this code will return an array with key name as array elements
console.log(Object.keys(student));
// let perform some checks
console.log(typeof Object.keys(student));// okey array is an object
const val = Array.isArray((Object.keys(student)));
console.log(val);
// and its value is true

// now we use for of loop to print this
for(let key of Object.keys(student))
{
    // console.log(key); //this gives me key 
    // console.log(student[key]); //this gives me value
    console.log(key,":",student[key]); //this will output key value pair
}
