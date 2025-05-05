/* === Introduction ===

console.log("Hello, world!");
console.log("This is a test.");

window.alert("Hello, world!");

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like Pizza!"

//this is a comment

*/

/* === Variables ===
let x;

x = 123;
console.log(x)

let age = 21;
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
*/

/* === Arithmetics operators === 


let students = 30

//students = students +1;
//students = students -1;
//students = students * 2
//students = students /2;
//students = students % 3;
//let extraStudents = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2;

// students ++;
// students --;

console.log(students)
*/

/* === User Input === 
    Easy Way
let username;

username = window.prompt("What is your username?");

console.log(username)

//////////

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
*/

/* === Type Conversion ===

let age = window.prompt("How old are you?");

age = Number(age);
age += 1;

console.log(age, typeof age);
*/

/* === Constants ===

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myText").value;
radius = Number(radius);
circumference = 2* pi * radius;
document.getElementById("myH3").textContent = `${circumference}cm`;

}
*/

/* === Math ===

console.log(Math.PI)

let x = 3.21;
let y = 2;
let z;

x = Math.round(x);

console.log(x);

*/

/* === Random Number Generator === 

let min = 50;
let max = 100;

let Randomnum = Math.floor(Math.random() * (max - min)) + min;

console.log(Randomnum);



const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6
let Randomnum;

myButton.onclick = function() {
    Randomnum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = Randomnum;

}

*/

/* === If Statements ===

let age = 10;

if(age >= 18){

    console.log("you are old enough to enter this site")
}
else{
    console.log("you are not old enough to enter this site")
}

let time = 14
if (time < 12){
    console.log("Good Morning")
}
   else{
    console.log("Good Afternoon")
   }

let age = 19;
let hasLicense = false;

if (age >= 16 ){
    console.log("You are old enough to drive")

    if(hasLicense){
        console.log("you have your license")
    }
    else{
        console.log("you dont have your license") 
    }
}
else{
    console.log("You are not old enough to drive")

}
let age = -1

if (age >= 18){
    console.log("you are old enough to enter this site")
}
else if(age < 0){
    console.log("Thats Impossible, your age cant be less than zero")
}
else{
    console.log("you are not old enough to enter this site")

}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age 

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if (age > 100) {
        result.textContent = "You are too old to enter this site";
    }
    else if (age >= 18) {
        result.textContent = "You are old enough to enter this site";
    }
    else if (age < 0) {
        result.textContent = "That's impossible, your age can't be less than zero";
    }
    else {
        result.textContent = "You must be 18 to enter this website";
    }

}
*/

/* === Checked Preoperty === */

const myCheckbox = document.getElementById("myCheckbox");
const VisaBtn = document.getElementById("VisaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if (myCheckbox.checked){
        subResult.textContent = `You are Subscribed`;
    }
    else{
        subResult.textContent = `You are not Subscribed`;
    }

    if(VisaBtn.checked){
        paymentResult.textContent = `You are paying with visa`
    }
    else if (mastercardBtn.checked){
        paymentResult.textContent = `You are paying with Mastercard`
    }
    else if (paypalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`
    }
    else{
        paymentResult.textContent = `You must select a payment type`
    }
}

