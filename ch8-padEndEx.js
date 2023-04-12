let str1 = "OK";
let str2 = "Javascript";
let str3 = "Wow";

let fillstring = "               ";
let maxLength = fillstring.length;
console.log(maxLength); //15

console.log(str1.padStart(maxLength, fillstring));
console.log(str2.padStart(maxLength, fillstring));
console.log(str3.padStart(maxLength, fillstring));

/*
             OK
     Javascript
            Wow
*/

let filename = "test";
let fillString = ".js";

let maxLength2 = filename.length + fillString.length;
console.log(filename.padEnd(maxLength2, fillString)); //test.js

let numStr = "170";
let fillString2 = ".00";
let maxLength3 = numStr.length + fillString2.length;
console.log(numStr.padEnd(maxLength3, fillString2)); //170.00
