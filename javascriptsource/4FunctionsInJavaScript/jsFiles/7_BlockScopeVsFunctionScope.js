//block scope vs function scope

// let and const are block scope
//var is function scope

{
    //this is a block, a block is defined by the curly braces
    const myName = "Monu";
    let listerCareFully = "If you try to access me out of this block I'll give you an error";
    console.log(myName);
    
}
    // console.log(listerCareFully);
    //error : listerCareFully is not defined

{
    //this is an another block
    const myName = "Lalit";
    console.log(myName);
    
}

const myName = "Krishna";// this is in global block

console.log(myName);

