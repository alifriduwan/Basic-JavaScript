var obj = {
  people: [
    { firstName: "Somsri", lastName: "Jaidee" },
    { firstName: "Somsuk", lastName: "Meejai" },
    { firstName: "Somruk", lastName: "Deejai" },
  ],
};

console.log(JSON.stringify(obj, null, 2)); // เพิ่มอากิวเมนต์ตัวที่ 3 = 2 เพื่อเว้นทีละสองตัวอักษร
/*
{
  "people": [
    {
      "firstName": "Somsri",
      "lastName": "Jaidee"
    },
    {
      "firstName": "Somsuk",
      "lastName": "Meejai"
    },
    {
      "firstName": "Somruk",
      "lastName": "Deejai"
    }
  ]
}
 */
