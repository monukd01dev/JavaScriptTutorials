// sort

// mutate the array

// sort in accending order

// but sort according to ascii value

// it converts numbers into string and then sort according to the ascii value of the first character of the string

// it sorts the string in alpabetical order and capital letters came first, because ASCII code of capital are starting from 65 to 90 and ASCII code of small letters start from 97 to 122

console.log('----------------sorting of strings-------------------\n\n');

const userName = ["Monu", "lalit", "krishna", "amit", "ashu", "ashish"];
userName.sort();
console.log(userName);

console.log('\n----------------sorting of numbers-------------------\n\n');

// const numbers = [1500,500,8,6,2,60];

// Expected output : [2,6,8,60,500,1500]

// console.log(numbers.sort())

//reality :  [1500, 2, 500, 6, 60, 8]
// reason is witten on line no 9

// Now its time resolve the issue

const numbers = [1500, 500, 8, 6, 2, 60];

console.log(numbers.sort((a, b) => a - b));

// now how the above code works

// taking example of 1500 and 500
// a-b ----> 1000
// a-b ----> positive (greater than 0) ----> b,a
// 500 , 1500

// a-b ----> 1000
// a-b ----> negative (less than 0) ----> a,b
// 500 , 1500  


console.log('\n----------------some real life shit!-------------------\n\n');

const products = [
    { produtId: 1, productName: "p1", price:200 },
    { produtId: 2, productName: "p2", price:1000 },
    { produtId: 3, productName: "p3", price:45 },
    { produtId: 4, productName: "p4", price:1600 },
    { produtId: 5, productName: "p5", price:369 },
]

// now I don't want to mutate my array so I clone it first

const priceLowToHigh = products.slice(0).sort((a,b)=>a.price-b.price);
console.log(priceLowToHigh);

const priceHighToLow = products.slice(0).sort((a,b)=>b.price-a.price);
console.log(priceHighToLow);





