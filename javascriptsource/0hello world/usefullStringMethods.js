"use strict";
// console.log("hellow world 1");

// let myName = "Jack_King";
//String    "J  a  c  k  _  K  i  n  g"
//Indexing   0  1  2  3  4  5  6  7  8
// 1.trim() //this removes the space
let myName = "     Jack King     ";
console.log(myName);
//     console.log(myName.length);

//     myName = myName.trim();
//     console.log(myName);
//     console.log(myName.length);

console.log("           checking Mutability         ");
myName.trim();
console.log(myName);//it is immutable here also like java
let output = myName.trim();//not change the actual string return new string
console.log(output);

myName.re

// 2.toUpperCase()

    // console.log(myName);
    // myName=myName.toUpperCase();
    // console.log(myName.toUpperCase());

// 3. toLowerCase()
    // console.log(myName.toLowerCase());

// 4. slice
// start index
// end index
// syntax ->
// variableName.slice(startingIndex, endingIndex) {in which ending index is not included}
    // There are 3 methods for extracting a part of a string:

    // slice(start, end)
    // substring(start, end)
    // substr(start, length)
// console.log(myName.slice(1,5));
// output
    // ack_
// what if you'll not provide the ending index it will print all the rest indexes 
    // console.log(myName.slice(1));
// output
    // ack_King


//Some more string methods
    // String length
    // String slice()
    // String substring()
    // String substr()
    // String replace()
    // String replaceAll()
    // String toUpperCase()
    // String toLowerCase()
    // String concat()
    // String trim()
    // String trimStart()
    // String trimEnd()
    // String padStart()
    // String padEnd()
    // String charAt()
    // String charCodeAt()
    // String split()

    let textBox = "Array";

    let myArray = textBox.split("");//basically this method take delimiter and conver the string to array

    console.log(myArray);

    //pading into the string only work with string not for number
    let num = 5;
    console.log((num.toString()).padStart(5,"0"));
    console.log((num.toString()).padEnd(5,"0"));


    // replace and replaceAll take flags like /i (caseSensitive) /g (all matches)
    // By default, the replace() method replaces only the first match:

    let msg = "JavaScript is my favourite language favourite";
    console.log(msg.replace("favourite","most liked"));
    console.log(msg.replace(/favourite/g,"most liked"));

    console.log(msg.replaceAll(/favourite/g,"most liked"));
    

// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

    

