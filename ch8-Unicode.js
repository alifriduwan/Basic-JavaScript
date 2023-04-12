var a = "abc";
console.log(a.length); //3
console.log(a.codePointAt(0)); //97
console.log(a.codePointAt(1)); //98
console.log(a.codePointAt(2)); //99
console.log(a.codePointAt(3)); //undefined

// code point => string
console.log(String.fromCodePoint(17)); //◄
