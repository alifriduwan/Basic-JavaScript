// Accessor property

// Method setter ใช้กำหนดค่า ไม่สามารถอ่านได้
// Method getter ใช้อ่านค่า ไม่สารมารถเขียนได้

var font1 = {
  set color(param) {
    this.col = param;
  },
};

font1.color = "Black"; // แก้ไขค่าได้
console.log(font1.color); // ไม่สามารถอ่านค่าได้ undefined

var font2 = {
  col: "Black",
  get color() {
    return this.col; // return ข้อมูลภายในออบเจ็ค
  },
};

console.log(font2.color); //Black
font2.colr = "Red"; //
console.log(font2.color); // ยังได้ค่า blcak เช่นเดิมแม้ว่าถูกแก้ไขแล้วก็ตาม

// ทำให้สามารถแก้ไขและอ่านได้
var font3 = {
  col: "red",
  set color(param) {
    this.col = param;
  },
  get color() {
    return this.col;
  },
};

console.log(font3.color); //red
font3.color = "White";
console.log(font3.color); //white
