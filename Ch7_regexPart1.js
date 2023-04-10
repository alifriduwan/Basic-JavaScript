var re = /like/;
console.log(re.exec("I like you")); //[ 'like', index: 2, input: 'I like you', groups: undefined ]

var re2 = /html|div|br|button/;
console.log(re2.exec("<div>")); //[ 'div', index: 1, input: '<div>', groups: undefined ]
