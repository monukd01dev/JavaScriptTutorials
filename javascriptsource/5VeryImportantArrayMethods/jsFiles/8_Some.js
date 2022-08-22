// some method
// return true if one iteration of callback function return true

const userCart = [
    {productId: 1, productName : "laptop", price: 53000},
    {productId: 2, productName : "RO", price: 20000},
    {productId: 3, productName : "drone", price: 15000}
]

console.log(userCart.some(product=>product.price>50000));