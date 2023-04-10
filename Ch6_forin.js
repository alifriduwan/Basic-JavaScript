// ประโยคคำสั่ง for..in

function Font() {
  this.color = "red";
  this.size = 200;
}

var coordinate = { x: 1, y: 1, z: 1 };
Font.prototype = Object.create(coordinate);
Font.prototype.myfunction = function () {};

var font = new Font();
font[1] = "fontValue";
for (var prop in font) {
  console.log(prop);
}

// ผลการรัน
/*
1
color
size
myfunction
x
y
z
*/
