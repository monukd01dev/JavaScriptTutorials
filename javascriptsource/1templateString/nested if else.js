let winNum = 22;
let inp = +prompt('Guess a number'); //promt take input in string so we have to change in number using the trick

if(inp===winNum){
    console.log('Your guess is right.');
}
else{
    if (inp>winNum) {
        console.log('Too high!');
    }
    else{
        console.log(`Too short!`)
    }
}



