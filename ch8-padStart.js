// Method padStart()

//padStart(maxLength,fillString='')
let str = "x";
let newStr = str.padStart(5, "ab");
console.log(newStr); //ababx
console.log(str); //x

let newStr2 = str.padStart(4, "ab");
console.log(newStr2); //abax

let newStr3 = "abc".padStart(10, "0123456789");
console.log(newStr3); //0123456abc

let newStr4 = "abcd".padStart(2, "y");
console.log(newStr4); //abcd ได้สตริงตัวเดิมเนื่องจาก สตริงเดิม > maxLength

let newStr5 = "x".padStart(3);
console.log(newStr5); //"  x" เมื่อไม่มีการกำหนด fillstring ก็จะทำการเติมช่องว่างให้
console.log(newStr5.length); //3
