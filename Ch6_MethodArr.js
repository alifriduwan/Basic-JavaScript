// Methods Array

// join()
var arr1 = ["a", "b", "c", "d"];
var str = arr1.join("->");
console.log(str); //a->b->c->d

// push()
var arr2 = []; // empty array
arr2.push("a", "b", "c", "d"); // เพิ่มสมาชิกให้อาเรย์ (กี่ตัวก็ได้)
console.log(arr2); //[ 'a', 'b', 'c', 'd' ]
console.log(arr2.pop()); //d เป็นการลบข้อมูลตัวสุดท้ายออก
console.log(arr2); //[ 'a', 'b', 'c']

// indexOf()

var arr3 = ["a", "b", "c"];
console.log(arr3.indexOf("b")); //1 หาตำแหน่งของ B
console.log(arr3.indexOf("d")); //-1 หาตำแหน่งของ d เมื่อไม่มีตำแหน่งจะรีเทิน -1

//some()
var arr4 = ["a", "b", "c", "d"];
var result = arr4.some(function (value, index, arrayObj) {
  //value is สมาชิกของอาเรย์
  //index is the index of array
  //arrayObj is ["a", "b", "c", "d"]
  return value == "d";
});

console.log(result); //true

// forEach() เข้าถึงสมาชิกแต่ละตัวในอาเรย์
var arr5 = ["a", "b", "c", "d"];

arr5.forEach(function (value, index, arrayObj) {
  //value is สมาชิกของอาเรย์
  //index is the index of array
  //arrayObj is the array ["a", "b", "c", "d"]
  console.log("a[", index, "]=", value);
});
/*
a[ 0 ]= a
a[ 1 ]= b
a[ 2 ]= c
a[ 3 ]= d
*/
