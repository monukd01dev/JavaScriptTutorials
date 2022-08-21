// for each method 
// all methods are for array that's why we create array first

const numbers =[5,4,3,2,1];

//suppose that you have to create a function that print the index and multiply each number with the index

const multiplyByIndex =(number,index)=>{
    console.log(`Index : ${index} , Multiplication : ${index*number}`);
}

// multiplyByIndex(0,numbers[0]);

console.log('<------------------ For Loop Output ------------------>\n\n');

for(let i=0; i < numbers.length; i++){
    multiplyByIndex(numbers[i],i);
}


console.log('\n\n<------------------ Foreach Output ------------------>\n\n');
// numbers.forEach(multiplyByIndex);

    
numbers.forEach((number,index)=>console.log(`Index : ${index} , Multiplication : ${index*number}`))//this type of functions called anoymous functions


//forEach function works
// it passes number and index as arguments to the callback function
// it works as loop 


// real life example

const users = [
    {firstName : "jim", age:24},
    {firstName : "kim", age:30},
    {firstName : "park", age:22},
    {firstName : "chull", age:25},
    {firstName : "chung", age:23}
]

users.forEach((user)=>console.log(user.firstName))

// now thing is that you can use for of loop for that but why we use forEach method because for of loop is newer than the method and so many coders used method do this that's why learning this is important

for( let user of users)
console.log(user.firstName)