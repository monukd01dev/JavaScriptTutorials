//lexical Scope
//lexical environment
//lexical environment chaining
const myVar = "global one";
function main (){
    const myVar = "value1";
    const func1 = function (){
        const myVar = "changed";
        console.log('Inside Func1',myVar);

        
    }
    const func2 =()=> console.log('Inside Func2',myVar);

    console.log(myVar);
    func1();
    func2();
    
}

main();
console.log(myVar);

//every function first check its scope and then check it lecxical environment and chain continue... like that.