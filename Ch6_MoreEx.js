// สไตล์การเขียนแบบปกติ

let person = {
  name: "John",
  age: 27,
};

function ShowData(person) {
  console.log("Person is", person.name, ", age is", person.age);
}

ShowData(person); //Person is John , age is 27

//  สไตล์การเขียนแบบย่อ

function ShowData2(person) {
  console.log("Person is", person.name, ", age is", person.age);
}
ShowData2({
  name: "Doe",
  age: 37,
});
// Person is Doe , age is 37
