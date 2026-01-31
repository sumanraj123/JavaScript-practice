// "use strict";
// // Hoisting - Invoking a function before initialization

// // function declarations are hoisted

// // var hoisted and have values undefined

// console.log(x); // undefined - Js reserves memory in the allocation phase so it will assign undefined
// getName();
// console.log(getName); // function definition gets printed
// var x = 10;

// function getName() {
//   console.log("string");
// }

// // Let and const also hoisted but they will be in TDZ (temporal dead zone)

// // when u try to access a variable with let and const  before declaring - Throw an reference Error
// // Cannot access 'a' before initialization

// let a = 10;
// console.log(a);

// // console.log(y); // y is not defined - Js will  check in the global scope
// // // if there is no variable declaration it will throw an Reference error : y is not defined
// // function check() {
// //   var y = 9;
// // }

// // Swap two variables without third one

// let s = 10;
// let u = 15;

// [s, u] = [u, s];

// console.log(s);
// console.log(u);

// // check if a value is primitive data type

// // Primitive datatype - numeric,string,boolean,null,BigInt

// function isPrimitive(value) {
//   return (
//     value === null || (typeof value != "object" && typeof value != "function")
//   );
// }

// isPrimitive(10);

// console.log(isPrimitive("hi")); // true
// console.log(isPrimitive(null)); // true
// isPrimitive(undefined); // true
// console.log(isPrimitive({})); // false
// console.log(isPrimitive([])); // false
// console.log(isPrimitive(() => {}));

// const d = 10;

// function checkbehaviour() {

//   // Local scope -  Js creates memory for this variable for
//   //  this function in the Execution context and this is not accessible outside
//   // Same applies for let variables

//   console.log("checkbehaviour function",d);
//   var d = 20;
// }

// checkbehaviour();

// // why const objects can mutate

// // Const protect binding of this variable not the value
// // which means that u can modify the content of the object it references

// const user = {
//   name: "suman",
// };
// user.name = "raj"; // Allowed

// console.log(user);

// but this is not allowed
// user = {}; // TypeError : Assignment to constant variable

// In order to prevent the mutation - object.freeze()

// const obj = Object.freeze({ name: "sumanraj" }); // becomes ready only property

// obj.name = "raj";

// console.log(obj); // In strict mode - TypeError: Cannot assign to read only property 'name' of object '#<Object>'

// if (true) {
//   var n = 10;  // function scope n gets printed
//   let b = 20;
//   const c = 30;
// }

// console.log("n",n);
// console.log(b);
// console.log(c);

// var is function/global-scoped, so it tries to redeclare a in the same scope — which is not allowed

// This is called illegal shadowing:

// You cannot redeclare a let/const variable using var in the same or inner scope.
// let a = 10;

// {
//   var a = 20;
//   console.log(a);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 0);
// }

// output
// 3;
// 3;
// 3;
// 0;
// 1;
// 2;

// Reason:
// 🔹 var i

// var is function-scoped

// All callbacks share the same i

// Loop finishes → i = 3

// So prints 3 3 3

// 🔹 let j

// let is block-scoped

// Each iteration gets a new j binding

// So prints 0 1 2

// 🔥 Interview rule:

// var creates one shared variable; let creates a new binding per iteration.

// var a = 10;
// let b = 20;

// console.log(window.a);
// console.log(window.b);

// let x = 10 ;
// {
//     console.log(x)
//     let x = 5;
// }

// function test() {
//   console.log(a);
//   if (true) {
//     var a = 10;
//   }
//   console.log(a);
// }

// test();

// const funcs = [];

// for (let i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// }

// funcs[0]();
// funcs[1]();
// funcs[2]();

// let a = 10;

// function test() {
//   a = 20;
// }

// test();
// console.log(a);

// Reason:

// a is found in the outer (global) scope

// Inside test(), we reassign the same variable

// So after calling test(), a becomes 20

// let a = 10;

// function test() {
//   let a = 20;
// }

// test();
// console.log(a);

// ouput - 10 (shadowing )

// var l = 10 ;
// function test(l){

// }

// test(30);

// console.log(l);

// function test(...args) {
//   console.log(args[0]);
//   console.log(arguments[0]);
// }

// test(10, 20);

// function check(a, b, c) {
//   console.log(arguments.length);
//   console.log(check.length);
// }

// check(10, 20); // function invocation - arguments getting passed so length is 2

let d = 1000;
{
  let d = 100;
  console.log(d);
}

console.log(d);
