var re1 = /[abc]/;
console.log(re1.exec("tob")); //[ 'b', index: 2, input: 'tob', groups: undefined ]

var re2 = /[^cat]/;
console.log(re2.exec("cats")); //[ 's', index: 3, input: 'cats', groups: undefined ]

var re3 = /[7-9]/;
console.log(re3.exec("2+8")); //[ '8', index: 2, input: '2+8', groups: undefined ]

var re4 = /[a-c]/;
console.log(re4.exec("rat")); //[ 'a', index: 1, input: 'rat', groups: undefined ]

var re5 = /[A-Z]/;
console.log(re5.exec("COM")); //[ 'C', index: 0, input: 'COM', groups: undefined ]

var re6 = /[a-cA-C]/;
console.log(re6.exec("AND")); //[ 'A', index: 0, input: 'AND', groups: undefined ]
