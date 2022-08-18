// While programming we came in a situation were we have to repeate same block of code again and agian and don't you thing writing the code can be tidious task and increase length of program.
// In programming languages there is a principal known as DRY Don't Repeat Yourself.
// And functions help us too achive this principal.
// So in this type of situation what you need a saviour(function) who have these features:
// 1. Obedient (always response) 
// 2. availableness (always available)
// 3. Acceptance (Arguments(the values we pass to a function))
// 4. Feedback (means return something)
// 5. Have acceptance but at a certain level (basically we are talking about parameters here)
// 6. Not a reluctant (basical a function call another fucntion )
// 7. Offcourse it has a name.

// Now its time to make our hero but before we have to create a work or situation for our hero so he can work on it basically create a NYC so he can destroy it XD
// situation is : where ever you pass a name to a function it have to print that name with saying happy birthday name. Like if you pass monu it gives you happy birthday monu.

function happyBirthday (name){
    console.log(`happy birthday ${name}`)
}

happyBirthday("monu");

// In line no 16 fuction is like Marvels tag always there then happyBirthday which is name of our function and in () parameters came here, in our function we need only one thing which is name or a string which we use to achieve aur final goal.

// in line no 20 we are calling our functions and in braces passing arguments

// from line no 16-18 these type of creating function is known as function declaration (creating a function with function keywords)

function isEven(num) {
    //  return num%2===0 ? true : false ;
    return num%2===0 ;
}

console.log(isEven(3));

function firstChar(string){
    return string[0];
}

console.log(firstChar("monu"));

function find(source,target) {
    for(let sources of source){
        if (sources === target) {
            return "found"; 
        }
        
    }
    return "not found";
    
}

const myArray = ['monu','lalit','amit','krishna','ashu','ashish'];
console.log(find(myArray,'kajal'));

// In functions when we encounter the return it stop its execution, return is the last thing a function do.
