// parameter destructuring

//object
//react

const person = {
    firstName : "Monu",
    gender : "Male"
}

// function printObj(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
    
// }
function printObj({firstName:fName,gender :g ,age :a}){
    console.log(fName);
    console.log(g);
    console.log(a)
    
}
printObj(person);