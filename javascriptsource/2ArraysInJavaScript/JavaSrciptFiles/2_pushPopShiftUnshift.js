// array push pop (remove or enter in back)
let colors = ['red','gree','blue','yellow'];
console.log(colors);
colors.push('purpule');
console.log(colors);
// pop is not only delete the element it also return it.
let popedCollector = colors.pop()
console.log(colors);
console.log(popedCollector);

// array shift unshift (remove or enter in front)

let shiftCollector = colors.shift();
console.log(colors);
console.log(shiftCollector);

// unshift enter at start
colors.unshift('violet');
console.log(colors);



