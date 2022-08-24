// optional chaining

const user ={
    // firstName : 'monu kumar',
    // address : {houseNumber : '1234'}
}

// console.log(user.firstName);
console.log(user?.firstName);
// console.log(user.address.houseNumber); // give error
console.log(user?.address?.houseNumber); //but this will not
