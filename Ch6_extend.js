// การสืบทอดสมาชิกหลายระดับชั้น
var extend = {
  drive: function () {
    console.log("Drive a", this.color, "car");
  },
};

function Car(color) {
  this.color = color;
}

Car.prototype = extend; // กำหนดอ็อบเจ็คตัวใหม่ได้แก่ extend
Car.prototype.stop = function () {
  console.log("Stop a", this.color, "car");
};

var redCar = new Car("red");
console.log(Object.getPrototypeOf(redCar) === extend); // true
redCar.drive(); //drive a red car
redCar.stop(); //stop a red car

function Car1(color) {}
Car1.prototype.drive = function () {
  console.log("Drive a", this.color, "car"); //this ชี้ไปยังอ็อบเจ็คที่ถูกสร้างขึ้น
};

function BlackCar(color) {
  this.color = color;
}

BlackCar.prototype = Object.create(Car1.prototype);
console.log(Object.getPrototypeOf(BlackCar.prototype) === Car1.prototype); //true

BlackCar.prototype.stop = function () {
  console.log("stop a", this.color, "car");
};

var blackCar = new BlackCar("black");
console.log(Object.getPrototypeOf(blackCar) === BlackCar.prototype); //true

blackCar.drive(); //Drive a black car
blackCar.stop(); //Stop a black car
