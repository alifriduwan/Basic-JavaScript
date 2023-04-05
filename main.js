// this

var obj = {
  a: 1,
  foo: function () {
    return 2;
  },
  bar: function () {
    console.log(this.a); // this a เป็นการเข้าถึง property a
  },
  zoo: function () {
    console.log(this.foo()); // this foo เป็นการเข้าถึง property foo()
  },
};

obj.bar(); //1
obj.zoo(); //2

var obj2 = {
  foo: function () {
    this.a = 17; // add property a to obj2
    console.log(this.a); //17
  },
  bar: function () {
    console.log(this.a); //17
  },
};

obj2.foo(); //17
obj2.bar(); //17
