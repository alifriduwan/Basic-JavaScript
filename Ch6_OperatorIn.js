var obj = { x: 2, y: 2 };
console.log("x" in obj); //true มีคีย์ x อยู่ในอ็อบเจ็ค obj
console.log("xyz" in obj); //false ไม่มีคีย์ xyz อยู่ในอ็อบเจ็ค obj

var arr = ["a", "b", "c", "d", "e"];
console.log(0 in arr); //true มีอินเด็กซ์ 0 ในอาเรย์นี้
console.log(6 in arr); //false ไม่มีอินเด็กซ์ 0 ในอาเรย์นี้
console.log("3" in arr); //true มีอินเด็กซ์ 3 ในอาเรย์นี้
console.log("length" in arr); //true อาเรย์นี้มี length เป็นพร็อพเพอร์ตี้

var parent = { x: 2 };
var obj = Object.create(parent);
console.log("x" in obj); //true เป็นการตรวจสอบว่ามีคีย์ชื่อ x ที่สืบทอดจากโปรโทไทป์หรือไม่
