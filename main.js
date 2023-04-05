// Object.defineProperty() จะระบุ property ของอ็อบเจ็คทีละตัว
// Object.defineProperties() จะระบุ property ของอ็อบเจ็คได้หลายๆคัวพร้อมกัน
// Object.getOwnPropertyDescript() เมธอดไว้ดูค่า descriptor

var obj1 = {};
Object.defineProperty(obj1, "foo", {
  value: 100,
  writable: true,
});
console.log(obj1.foo); //100
console.log(Object.getOwnPropertyDescriptor(obj1, "foo")); //return descriptor { value: 100, writable: true, enumerable: false, configurable: false }

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// var obj2 = {};
// Object.defindProperties(obj2, {
//   foo: {
//     value: "fooValue",
//     writable: true,
//   },
//   bar: {
//     value: "barValue",
//     writable: false,
//   },
// });

// console.log(obj2.foo, obj2.bar);
