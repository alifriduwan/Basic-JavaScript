// JSON.parse() แปลงชุดข้อมูลแบบ JSON กลายเป็นอ็อบเจ็คใน JavaScript

var json =
  '{"bold":true,\
"color":"red",\
"size":170}';

var obj = JSON.parse(json); //obj คืออ็อบเจ็คที่ใช้แทนข้อมูลแบบ JSON
console.log(typeof obj); //object
console.log(obj); //{ bold: true, color: 'red', size: 170 }
