// Constructor

function Car(color) {
  this.color = color;
  return true;
}

var redCar = new Car("Red");
var blueCar = new Car("Blue");
console.log(redCar.color); //Red
console.log(blueCar.color); //Blue
