// function returning function
// when a function accept or return a function they known as High Ordered Functions

function myFunc(){
    // return function hellow(){
    //     console.log('Hellow world');  
    // }
    function hellow(){
            console.log('Hellow world');  
        }
    return hellow;

}

const jack = myFunc();
// console.log(ans);
console.log(jack());