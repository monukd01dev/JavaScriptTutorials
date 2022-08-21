// reduce method it is very important method
// take input as callback function
// it also take default value for accumulator

const num = [1,2,3,4,5];
// aim : add all numbers of num array
const sum = num.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum);

// accumulator  , currentValue   return
//      1               2           3
//      3               3           6
//      6               4           10
//      10              5           15


//real life example

const userCart = [
    {productId: 1, productName : "laptop", price: 53000},
    {productId: 2, productName : "RO", price: 20000},
    {productId: 3, productName : "drone", price: 15000}
]

const totalOrderValue = userCart.reduce((total,product)=>
{ 
    // return total.price + product.price; // my mistake it took me a while to find the mistake
    return total + product.price;
}, 0);

console.log(totalOrderValue);

//    total  ,      product       return
//      0            53000        53000
//    53000          20000        73000
//    73000          15000        88000
