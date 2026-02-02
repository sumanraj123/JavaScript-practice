// JavaScript Callback Interview Questions (Practice Set)

/* =====================================================
   Question 1 — Basic Callback Execution
   What will be the output?
===================================================== */
function greet(cb) {
  console.log("Hi");
  cb();
}

greet(() => console.log("Suman"));

/* =====================================================
   Question 2 — Callback Execution Order
   What will be the output?
===================================================== */
function test(cb) {
  console.log(1);
  cb();
  console.log(2);
}

test(() => {
  console.log(3);
});

/* =====================================================
   Question 3 — Async Callback (setTimeout)
   What will be the output?
===================================================== */
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

/* =====================================================
   Question 4 — Callback Passed But Not Called
   What will be the output?
===================================================== */
function test(cb) {
  console.log("Start");
  cb;
  console.log("End");
}

test(() => console.log("Hello"));

/* =====================================================
   Question 5 — Callback with Arguments
   What will be the output?
===================================================== */
function calculate(a, b, cb) {
  cb(a + b);
}

calculate(2, 3, function (result) {
  console.log(result);
});

/* =====================================================
   Question 6 — Async Callback Inside Loop (Closure Trap)
   What will be the output?
===================================================== */
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/* =====================================================
   Question 7 — Fix the Bug (Loop + Callback)
   Make output:
   0
   1
   2
===================================================== */
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/* =====================================================
   Question 8 — Callback Hell
   What is the problem? How to improve?
===================================================== */
getUser(id, function (user) {
  getOrders(user.id, function (orders) {
    getPayments(orders[0].id, function (payment) {
      console.log(payment);
    });
  });
});

/* =====================================================
   Question 9 — Async Callback Execution Order
   What will be the output?
===================================================== */
function test(cb) {
  console.log("Start");
  setTimeout(cb, 0);
  console.log("End");
}

test(() => console.log("Callback"));

/* =====================================================
   Question 10 — Callback Scope Trap
   What will be the output?
===================================================== */
function outer(cb) {
  let x = 10;
  cb();
}

function inner() {
  console.log(x);
}

outer(inner);

/* =====================================================
   Question 11 — Callback + Closure
   What will be the output?
===================================================== */
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const cb = outer();
cb();
cb();

/* =====================================================
   Question 12 — Callback + Async Closure
   What will be the output?
===================================================== */
function outer() {
  let x = 5;
  setTimeout(function () {
    console.log(x);
  }, 1000);
}

outer();

/* =====================================================
   Question 13 — Callback + Promise + Event Loop
   What will be the output?
===================================================== */
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve().then(function () {
  console.log(3);
});

console.log(4);

/* =====================================================
   Question 14 — Callback Not a Function
   What will be the output?
===================================================== */
function test(cb) {
  cb();
}

test("hello");
