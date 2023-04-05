// การส่งค่าให้ตัวแปร

var obj1 = { a: 1, b: 2 };
var obj2 = obj1; // pass by reference   เมื่อมีการแก้ไข obj2 ทำให้ obj1 เปลี่ยนไปด้วย

obj2.a = 17;
obj1.b = 14;
console.log(obj1.a); //17
console.log(obj2.b); //14

var value1 = 15;
var value2 = value1; //pass by value เมื่อมีการเปลี่ยนที่ value2 จะไม่ส่งผลกับ value1

value2 = 12;
console.log(value1); //15
