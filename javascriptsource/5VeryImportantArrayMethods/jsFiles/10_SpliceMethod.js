// splice method
// mutate the array
// splice(start , delete , insert)

const myArray = ['item1','item2','item3'];

//delete // is also return the deleted item in an array
const deletedArray = myArray.splice(1,1);
console.log(myArray);
console.log(deletedArray);

//insert 
myArray.splice(1,0,"inserted ")
console.log(myArray);

//insert and delete
const deleted = myArray.splice(2,1,"inserted1","inserted2","inserted3");
console.log(deleted);
console.log(myArray);