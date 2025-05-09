/* === While ===  

let username = ""

 while (username === "" || username === null){
    username = window.prompt("Enter your name")
}

console.log(`hello ${username}`);

let username = ""

do {
    username = window.prompt("Enter your name")
}while (username === "" || username === null)

console.log(`hello ${username}`);*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your Username")
    password = window.prompt("Enter your Password")

    if (username === "leo" && password === "Wruleo"){
        loggedIn = true
        console.log("You are logged in ")
    }
    else{
        console.log("Invalid credentials! please try again")
        }
}

