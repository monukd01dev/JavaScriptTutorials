// clone using object.assign
// object.assign is older than spread operator that's why learning this important because people have used it in their code

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = Object.assign(obj);//wrong way
const obj2 = Object.assign({},obj);
obj["key3"]= 'value3';
console.log(obj);
console.log(obj2);

