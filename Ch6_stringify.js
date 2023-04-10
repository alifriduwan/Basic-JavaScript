// JSON.stringify() แปลงอ็อบเจ็คใน JavaScript ให้กลายเป็นสตริงในรูปแบบ JSON

var obj = {
  bold: true,
  color: "black",
  size: 19,
};

console.log(JSON.stringify(obj));
// {"bold":true,"color":"black","size":19}

var obj2 = {
  cars: ["Toyota", "BMW", "Tesla"],
};
console.log(JSON.stringify(obj2));
// {"cars":["Toyota","BMW","Tesla"]}
