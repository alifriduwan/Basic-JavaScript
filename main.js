// การเข้าถึง properties

var obj = {
  a: 1,
  myFunction: function () {
    console.log("call myFunction");
  },
};

console.log(obj.a); //1
obj.a = 2; // change value of key a to 2
console.log(obj.a); //2
console.log(typeof obj.myFunction); //function
obj.myFunction(); //call myFunction เป็นการเรียกใช้ obj function
