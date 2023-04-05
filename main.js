// เพิ่ม properties เข้าออบเจ็คทีหลัง

var obj = {}; // ประกาศ empty object

obj.a = 1; //add property a
obj[1] = 100; //add property 1
obj["name"] = "Dahlal"; // add property name
obj.myFunction = function () {
  console.log("Hello world"); //add property myFunction
};

console.log(obj.a); //1
console.log(obj[1]); //100
console.log(obj["name"]); //Dahlal
obj.myFunction(); //Hello world
