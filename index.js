/* === Introduction ===

console.log("Hello, world!");
console.log("This is a test.");

window.alert("Hello, world!");

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like Pizza!"

//this is a comment

*/

/* === Variables === */
let x;

x = 123;
console.log(x)

// let age = 21;
console.log(`You are ${age} years old`);
console.log(typeof age);

let firstname = "Leonardo";
console.log(`Your first name is ${firstname}`)
console.log(typeof firstname);

let online = true;
console.log(`${firstname} is online: ${online}`)
console.log(typeof online)

let fullname = "Leonardo Wrubleski"
let age = 21;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullname}`
document.getElementById("p2").textContent = `Your are ${age} yeas old`
document.getElementById("p3").textContent = `Enrolled: ${student}`

