// closures - A function which binds together with its lexical environment forms closure

// example
// Closure :
// Function bundled with its lexical environment is known as a closure.
// Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to.
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();

//   return y;
// }
// let z = x();

// z();

// currying

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// // add(1)(7)(9);

// const f1 = add(1);
// const f2 = f1(2);
// const result = f2(3);

// function run() {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// run();

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5))

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}



function outer() {
  return function inner() {
    console.log(x);
  };
  let x = 10;
}

const fn = outer();
fn();
