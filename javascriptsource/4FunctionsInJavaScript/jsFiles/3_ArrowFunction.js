// //function declaration

// function isEven(num) {
//     //  return num%2===0 ? true : false ;
//     return num%2===0 ;
// }
// //function expression

// const isEven = function (num) {
//     //  return num%2===0 ? true : false ;
//     return num%2===0 ;
// }
// //arrow function

// const isEven = (num) => {
//     //  return num%2===0 ? true : false ;
//     return num%2===0 ;
// }
// const isEven = num => {
//     //  return num%2===0 ? true : false ;
//     return num%2===0 ;
// }
const isEven = num => num%2===0 ;
    //  return num%2===0 ? true : false ;
    
console.log(isEven(3));

const firstChar = string => string[0]; 

console.log(firstChar("monu"));






// function find(source,target) {
//     for(let sources of source){
//         if (sources === target) {
//             return "found"; 
//         }
        
//     }
//     return "not found";
    
// }

// const myArray = ['monu','lalit','amit','krishna','ashu','ashish'];
// console.log(find(myArray,'kajal'));