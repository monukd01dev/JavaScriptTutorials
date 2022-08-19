//rest parameters

// function sumAll (...array){
//     var sum =0;
//     for (const numbers of array) {
//         var sum = sum + numbers;
//     }
//     console.log(sum);
// }
function sumAll (...array){
    let sum = 0;
    for (const numbers of array) {
        // sum = sum + numbers;
        sum+= numbers;
    }
    console.log(sum);
}

sumAll(1,2,3,4,5,6)