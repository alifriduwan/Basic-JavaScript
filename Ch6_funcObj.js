// ฟังก์ชันก็เป็นอ็อบเจ็ค

function foo() {
  console.log(foo.x);
}

foo(); //undefined

foo.x = 112; // เพิ่มเพื่อให้หาเจอ
console.log(foo.x); //112
foo(); //112
foo["x"] = true; //add property เข้าไปในฟังก์ชัน foo() ทีหลัง
foo["name"] = "My funtion"; //add property เข้าไปในฟังก์ชัน foo() ทีหลัง
