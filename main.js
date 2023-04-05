// การผูก this ไว้กับ object

var obj1 = {};
var obj2 = {
  a: 1,
  bar: function () {
    console.log("this.a = ", this.a);
    obj1.foo = function () {
      console.log("this.a = ", this.a);
    };
  },
};

obj2.bar(); // this.a = 1
obj1.foo(); // this.a = undefined  หาไม่เจอเนื่องจากใน obj1 ไม่ได้มีการประการ property a
