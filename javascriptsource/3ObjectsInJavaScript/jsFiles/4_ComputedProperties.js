//computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// task
// const obj ={
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }
// my first attempt
// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;

// now using computed values
const obj ={
    [key1] : value1,
    [key2] : value2

}
console.log(obj);

//delete form here 
for(key in obj){
    console.log(key, ":", obj[key])
}