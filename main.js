// using [] for accessing properties

var students = {
  "First name": "Manoch",
  "Last name": "Auma",
  "Who are you": function () {
    console.log("I am a student");
  },
  nickname: "Bar",
};

console.log(students["First name"]); //Manoch
var lastName = "Last name";
console.log(students[lastName]); //Auma
students["Who are you"](); //I am a student เรียกใช้ฟังก์ชันที่อยู๋ภายในออบเจ็ค
console.log(students.nickname); //Bar
console.log(students["nickname"]); //Bar
