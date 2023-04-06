// instanceof operator
// structure ==> instanceof function constructor

function Foo() {}

var obj = new Foo();
console.log(obj instanceof Foo); // true means obj ถูกสร้างขึ้นโดยฟังก์ชันคอนสตรัคเตอร์ Foo หรือไม่
console.log(Object.getPrototypeOf(obj) === Foo.prototype); // true means obj สืบทอดมาจากฟังก์ชันคอนสตรัคเตอร์ตัวแม่หรือไม่

function Foo2() {}
var obj2 = new Foo2();
console.log(obj2 instanceof Foo2); //true
console.log(Object.getPrototypeOf(obj2) === Foo2.prototype); // true

console.log(obj2 instanceof Object); // true
console.log(Foo2.prototype instanceof Object); // true

console.log(Object.getPrototypeOf(Foo.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // false
