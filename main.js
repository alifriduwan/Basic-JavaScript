// Method Object.create()

// structure Object.create(prototype, [propertiesObject])
var car = {
  // => prototype
  drive: function () {
    console.log("driving a car"); //ลูกๆของมันสามารถเรียกใช้ฟังก์ชันนี้ได้
  },
};

var redCar = Object.create(car);
var blackCar = Object.create(car, {
  // add properties
  foo: { writable: true, configurable: true, value: "fooValue" }, //descriptor
  bar: { writable: true, configurable: true, value: "barValue" },
});

redCar.drive(); //driving a car
blackCar.drive(); //driving a car
console.log(blackCar.foo); //fooValue
console.log(blackCar.bar); //barValue
