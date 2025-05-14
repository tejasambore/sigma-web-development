console.log("Welcome to the Tutorial on conditional in JavaScript");

let age = 5;

if (age > 18) {
    console.log("You can Drive..!");
} else if (age == 0) {
    console.log("Are you kidding");
} else if (age == 1) {
    console.log("Are you again kidding??");
} else {
    console.log("You cannot drive.");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c);

/* Translated to:
if (a > b) {
let c = a - b;
} else {
 let c = b - a;
}
*/