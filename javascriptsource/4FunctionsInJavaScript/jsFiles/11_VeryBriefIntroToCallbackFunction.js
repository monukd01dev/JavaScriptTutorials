// callback functions

const myFunc2 = name => console.log(`haa bhai ${name}`);

function myFunc(callback){//we named a callback function as callback
    console.log('Mai abhi myfunc me hune');
    callback("lalit"); //and now myFunc called myFunc2 
    
}

myFunc(myFunc2);// I have passed myFunc2 to myFunc