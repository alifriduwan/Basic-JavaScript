// Methods padEnd()

let newstr1 = "x".padEnd(6, "ab");
console.log(newstr1); //xababa

let newstr2 = "x".padEnd(5, "ab");
console.log(newstr2); //xabab

let newstr3 = "x".padEnd(10, "0123456789");
console.log(newstr3); //x012345678

let newstr4 = "helloWorld".padEnd(5, "Test");
console.log(newstr4); //helloWorld

let newstr5 = "x".padEnd(3);
console.log(newstr5); //"x  "
