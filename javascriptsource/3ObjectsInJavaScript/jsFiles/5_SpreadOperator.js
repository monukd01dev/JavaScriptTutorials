// spread operator
const array1 = [1,2,3];
const array2 = [4,5,6];
const num =98765432n;

// const newArray = [...array1,...array2,7,8,9];
// const newArray = [..."abcdefghijklmnopqrstuvwxyz"]
// const newArray = [...""+num];
const newArray = [..."123456"]; //you cannot spread numbers
console.log(newArray);

console.log("\n<------------Spread Operator in objects------------>\n");

const obj1 = {
    key1: "value1",
    key2: "value2",
    // key2:"meTooBro" //overwritting example
};
const obj2 = {
    // key1: "iHaveOverwriteTheValue", // overwritting example
    key3: "value3",
    key4: "value4"
};

// const newObj = { ...obj1,...obj2};
// const newObj = { ...obj1,...obj2, addingANewKeY:"youCanDoLikeThis"};
// const newObj = {..."indexBecameKeyAndElementsBecameValueHere"};//here we have spread array in objects
const newObj = {...["item1","item2"]}//work same as above
console.log(newObj);

// In object there should be only one key with that key name otherwise the newer one overwrite the value of previous key 
// the above concept also work when you are combining two object in one object lets see how
