// callback functions

const myFunc2 = name => console.log(`haa bhai ${name}`);

function myFunc(callback){
    console.log('Mai abhi myfunc me hune');
    callback("lalit");
    
}

myFunc(myFunc2);