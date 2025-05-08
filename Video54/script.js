alert("Hello..!")

console.log("Hello..!");
console.log("Code is running..!");

var a = prompt("Enter your Name:");
console.log("Your name is: " + a);

var b = confirm("Do you want to leave this page?");

if (b) {
    console.log("You are leaving the page..!");
} else {
    console.log("You are staying on the page..!");
}

document.title = "My First JavaScript Page";
document.body.style.backgroundColor = "lightblue";