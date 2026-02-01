// getName();

// var x = 7;

// function getName() {
//   var a = 5;
//   console.log("sumanraj");
// }

// console.log(getName);

// console.log(typeof(this));

// // currying - arrow function
// // Currying converts a multi argument function into nested functions ,each taking a single argument
// /* Advantages

// */
// const add = (a) => (b) => (c) => a + b + c;

// // Currying - Normal function
// function addNumbers(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1)(2)(3));

// console.log(addNumbers(4)(5)(6));

// // Debouncing
// const getData = () => {
//   console.log("sumanraj");
// };


// function magic(fn, delay) {
//   return function () {
//     setTimeout(() => {
//       getData();
//     }, delay);
//   };
// }

// const delay = magic(getData, 300);

// const obj = {
//   name: "Suman",
//   greet() {
//     console.log(this.name);
//   },
// };

// setTimeout(obj.greet, 0);

// const obj1 = {
//   name: "Suman",
//   greet() {
//     return function () {
//       console.log(this.name);
//     };
//   },
// };

// obj1.greet()();

// const obj2 = {
//   name: "Suman",
//   greet() {
//     return () => {
//       console.log(this.name);
//     };
//   },
// };

// obj2.greet()();

// const obj = {
//   name: "Suman",
//   greet() {
//     console.log(this.name);
//   },
// };

// const bound = obj.greet.bind({ name: "Rahul" });
// bound();

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Suman");
// const p2 = Person("Rahul");

// console.log(p1.name);
// console.log(p2);

// setTimeout(() => console.log("a"), 0);
// Promise.resolve().then(() => {
//   console.log("suman");

//   setTimeout(() => console.log("b"), 0);
// });
// Promise.resolve().then(() => {
//   console.log("c");
// });

// setTimeout(() => console.log("d"), 0);

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log("The value of i", i);
//   console.log("the value of n", n);
// }
// Logs:
// 1 3 7 12

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2



function fn(){
  return
  {}
}

console.log(fn());