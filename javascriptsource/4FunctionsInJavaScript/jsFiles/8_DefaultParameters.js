// default parameters

//before ES6

// function sum(a,b){
//     if (typeof b ==="undefined") {
//         b=0;    
//     }
//     return a+b;
// }



//after ES6
function sum(a,b=0){
    return a+b;
}


const ans = sum(8);
console.log(ans);