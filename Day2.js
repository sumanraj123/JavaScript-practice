// function statement and function Declaration

// Creating a function using function declaration
function greet() {
  console.log("Hello, World!");
}

// function expression

var sum = function (a, b) {
  return a + b;
};

// difference between function declaration and function expression
// Hoisting
// Named function Expression

var getName = function nameFunc() {
  console.log("Inside named function expression");
};

// Anonymous function

// A function without a Name is known as Anonymous function
// This can be created using function expression and named function expression

var anonFunc = function () {
  console.log("Inside Anonymous function");
};

var namedAnonFunc = function namedFunc() {
  console.log("Inside named function expression");
};

// If u call the named function directly it will throw an error
// namedFunc(); // Uncaught ReferenceError: namedFunc is not defined

// First class functions
// Functions in JavaScript are treated as first-class citizens.
// This means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.

// Example of first-class functions

var firstClassFunction = function (param1) {
  console.log("param1", param1);
};

firstClassFunction(function () {
  console.log("I am passed as an argument");
});

function returnFunction() {
  return function () {
    console.log("I am returned from a function");
  };
}

// var returnedFunc = returnFunction();
console.log(returnFunction());

// callback function with EventListener with closure

function attachEventListener() {
  let count = 0;
  document.getElementById("mybutton").addEventListener("click", function () {
    count++;
    console.log("Button clicked " + count + " times");
  });
}

attachEventListener();

function test(cb) {
  console.log("Start");
  cb;
  console.log("End");
}

test(() => console.log("Hello"));

function calculate(a, b, cb) {
  cb(a + b);
}

calculate(2, 3, function (result) {
  console.log(result);
});

// getUser(id, function (user) {
//   getOrders(user.id, function (orders) {
//     getPayments(orders[0].id, function (payment) {
//       console.log(payment);
//     });
//   });
// });

// function outer(cb) {
//   let x = 10;
//   cb();
// }

// function inner() {
//   console.log(x);
// }

// outer(inner);

function outer() {
  let x = 5;
  setTimeout(function () {
    console.log(x);
  }, 1000);
}

outer();

function test(cb) {
  cb();
}

test("hello");






