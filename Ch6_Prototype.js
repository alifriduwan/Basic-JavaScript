// Prototype

function Car1(color) {
  this.color = color;
}

var redCar = new Car1("red");
console.log(Object.getPrototypeOf(redCar) === Car1.prototype);

function Car2(color) {
  this.color = color;
}

Car2.prototype.drive = function () {
  // add method for prototype Car2
  console.log("Drive a ", this.color, " car."); //this จะชี้ไปยังอ็อบเจ็คที่ถูกสร้างขึ้น
};

var blackCar = new Car2("black");
blackCar.drive(); // Drive a black car.

var greenCar = new Car2("green");
greenCar.drive(); // Drive a green car

console.log(Object.getPrototypeOf(blackCar) === Car2.prototype); //true
console.log(Object.getPrototypeOf(greenCar) === Car2.prototype); //true

function Car3(color) {
  this.color = color;
}

Car3.drive = function () {
  console.log("Drive a car!");
};

Car3.drive(); // Drive a car!
var yellowCar = new Car3("yellow");
console.log(typeof yellowCar.drive); // ไม่สามารถเรียกใช้งานได้เนื่องจากเมธอดถูกประกาศไว้ที่ Car3
