//iterables
// are those on which we use for of loop
// string , array are iterable 
console.log('---------------String Output with for of loop----------------\n\n');

const myUserName = "monukd01dev";
for (const char of myUserName) {
    console.log(char);
}
console.log('\n\n---------------Array Output with for of loop----------------\n\n');

const myFriends = ['lalit','krishna','amit','ashu','ashish'];
for (const friend of myFriends) {
    console.log(friend);
}

// const friends = {name:'lalit',age:19};
// for (const detail of friends) {
    //     console.log(detail);
    // }
    // script.js:18 Uncaught TypeError: friends is not iterable
//  at script.js:18:22

console.log('\n\n---------------Array like objects----------------\n\n');

// array like objects
// who have length property
// whoes elements can be accessed from indexes
// example :- string

console.log(myUserName.length);
console.log(myUserName[0]);
