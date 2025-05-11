console.log("Hey.. welcome to learning JavaScript");

let a = 5;
let b = 6;
let c = "Tejas"

let _a = "Shubham";
// var 55a = "Rohan";   // Not Allowed

console.log(a + b); // 11
console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);

// Not allowed - a1 is constant 
// const a1 = 6;
// a1 = a1 + 1; 

{
    let a = 10;
    console.log(a); // 10
    console.log(b); // 6
}
console.log(a); // 5

let x = "Harry";
let y = 22;
let z = 3.25;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Objects:
let o = {
    "name": "Harry",
    "job id": 22,
}
console.log(o);

o.salary = 125000;
console.log(o);