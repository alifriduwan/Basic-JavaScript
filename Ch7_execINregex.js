var result = /(foo).(bar)/.exec("0123foo_bar");

console.log(result.index); //4
console.log(result[0]); //foo_bar
console.log(result[1]); //foo
console.log(result[2]); //bar
console.log(result.input); //0123foo_bar
