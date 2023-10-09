"use strict";
/*
    Primitive datatypes (7)
    -> string 
    -> undefined
    -> null
    -> boolean
    -> symbol
    -> number 
    -> BigInt

    Non-primitive datatypes
    -> object
*/
//<------------------MainTopic----------------->

// template strings
console.log ("           first output        ");
// 1. typeof operator

    let age = 19;
    let myName = "monukdo1dev";
    let result = true;
    console.log( typeof age );
    console.log( typeof myName);
    console.log(typeof result);
    console.log ("           second output        ");
    // 2. convert number to string.
    
    // if you'll have to use this trick, you have to add an empty string with your number like this 19 + ""
    // example
    console.log(typeof age);
    // age += ""; //this will turn 22 -> "22" //this type of addition called Augmented Addition
    //is toString change the type
    age.toString();//no it will return the String not change the acutal number datatype
    console.log(typeof age);
    age+= "";
    console.log(typeof age);
    
    console.log ("           third output        ");
// 3. convert string to number.

// to convert a string to  a number you have to put + infront of a string like this +"19"
    let variable = +"22n";
    // let variable =22n;
    console.log(typeof variable);

    console.log ("           fourth output        ");    
// lets see lil-bit of typecasting 

    variable = String(variable);
    console.log(typeof variable);

// string templating actual part

let myAge = 19;
let myNaam = "Jim Hopkins";
// I have to output above information like this 
// Myself Jim Hopkins and my age is 19
// we have two ways hardcode or using string templateing

// hardway
    let output = "Myself " + myNaam + " and my age is " + myAge;
    console.log(output);
// using string templating
    output = `Myself ${myNaam} and my age is ${myAge}.`;
    console.log(output);
// One thing that you have to rember here is that don't forget use backticks `` don't wrap your string with "" and ''