// every method
// input ---> callback function which return boolean
// return ---> boolean

// Now as the name suggests every means that this function will only return true if every iteration of callback function return true.

// now I have to check that my array numbers have all the even numbers or not

const numbers =[2,4,6,8]; // have all even no.
// const numbers =[2,4,6,8,9];//have one odd no.
const ans = numbers.every(number=>number%2===0);
console.log(ans);

console.log('-----------------some real stuff--------------------');

console.log('I have to check the product price is less than 50000');

const userCart = [
    {productId: 1, productName : "laptop", price: 53000},
    {productId: 2, productName : "RO", price: 20000},
    {productId: 3, productName : "drone", price: 15000}
]

console.log(userCart.every(product=>product.price<50000))
// it returns false cause price of laptop is 53 thousands
