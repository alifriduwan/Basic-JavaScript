var car = {};

var redCar = Object.create(car);
var greenCar = Object.create(car);

// add properties for objects car เพิ่มทีหลัง
car.drive = function () {
  console.log("What a drive!");
};

redCar.drive(); //What a drive!
greenCar.drive(); //What a drive!

// using Object.getPrototypeOf() เพื่อตรวจสอบว่ามีอะไรเป็นแม่แบบ

console.log(Object.getPrototypeOf(redCar) == car); //true
console.log(Object.getPrototypeOf(greenCar) == car); //true
