// Method repeat()

console.log("JavaScript".repeat(3)); //JavaScriptJavaScriptJavaScript

// Method startWith()
console.log("JavaScript".startsWith("Java")); //true มีคำว่า Java อยู่ตำแหน่งแรก
console.log("JavaScript".startsWith("World")); //false ไม่มีคำว่า world อยู่ตำแหน่งแรก

// Method endsWith()
console.log("JavaScript".endsWith("Script")); //true มีคำว่า Script  อยู่ตำแหน่งสุดท้าย
console.log("JavaScript".endsWith("Java")); //false ไม่มีคำว่า Java อยู่ตำแหน่งสุดท้าย

//Method includes()
console.log("JavaScript".includes("Script")); //true มีคำว่า Script  อยู่ในสตริง
console.log("JavaScript".includes("test")); //false ไม่มีคำว่า test  อยู่ในสตริง

// Method ทั้ง 3 ตัวสามารถระบุอากิวเมนต์ที่สองเพื่อระบุตำแหน่ง index
console.log("Hello, World".startsWith("Wo", 7)); //true
console.log("JavaScript".endsWith("va", 4)); //true
console.log("JavaScript".includes("va", 2)); //true
