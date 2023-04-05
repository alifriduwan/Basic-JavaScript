// Operator delete in Object

var obj = { x: 1, y: 2 };
console.log(delete obj.x); //true means ลบสำเร็จ
console.log(delete obj.y); //true means ลบสำเร็จ

console.log(obj); // {} empty object

// Operator delete in Object
var a = ["Auma", "Manoch"];
console.log(a); //[ 'Auma', 'Manoch' ]
console.log(a.length); //2
console.log(delete a[0]); //true
console.log(a); //[ <1 empty item>, 'Manoch' ]
console.log(delete a[1]); //true
console.log(a); //[ <2 empty item> ]
console.log(a.length); //2 ความยาวของอาเรย์ยังคงเดิม ลบออกแค่สมาชิก
