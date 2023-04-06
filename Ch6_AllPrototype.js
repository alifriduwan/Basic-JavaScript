// prototype ที่มีอยู่ในภาษา

// Functions
Function.prototype.sayMsg = function (msg) {
  console.log("Function say :", msg);
};

function myFunction() {}
myFunction.sayMsg("Hello world"); //Function say : Hello World

// Array
Array.prototype.sayMsg = function (msg) {
  console.log("Array say :", msg);
};
[].sayMsg("Hello"); //Array say : Hello

// Object
Object.prototype.sayMsg = function (msg) {
  console.log("Object say :", msg);
};
var obj = {};
obj.sayMsg("Hello"); //Object say : Hello
({}.sayMsg("Hello")); //Object say : Hello

// String
String.prototype.sayMsg = function (msg) {
  console.log("String say :", msg);
};
"Bar".sayMsg("Hello"); //String say : Hello

// boolean
Boolean.prototype.sayMsg = function (msg) {
  console.log("Boolean say :", msg);
};
true.sayMsg("Hello"); //Boolean say : Hello

// number
Number.prototype.sayMsg = function (msg) {
  console.log("Number say :", msg);
};
var num = 17;
num.sayMsg("Hello"); //Number say : Hello
(17).sayMsg("Hello"); //Number say :Hello
