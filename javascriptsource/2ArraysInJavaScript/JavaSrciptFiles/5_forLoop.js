//for loop in array

let maang = ['Meta','Apple','Amazon','Netflix','Google'];
console.log(maang.length);
console.log(maang[maang.length-2]);

// now loop comes in...
// for (let i  = 0; i   < maang.length; i++) {
//     console.log(maang[i]);
// }
// for (let i  = 0; i   < maang.length; i++) {
//     console.log(maang[i].toUpperCase());
// }

let array2 = [];
for (let i  = 0; i   < maang.length; i++) {
    array2.push(maang[i].toUpperCase());
}
console.log(array2)