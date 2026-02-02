// setTimeout(() => console.log("a"), 0);
// Promise.resolve().then(() => {
//   console.log("suman");

//   setTimeout(() => console.log("b"), 0);
// });
// Promise.resolve().then(() => {
//   console.log("c");
// });

// // console.log("hello");

// setTimeout(() => console.log("d"), 0);


console.log("start");

Promise.resolve().then(function repeat() {
  console.log("micro");
  Promise.resolve().then(repeat);
});

setTimeout(() => console.log("timeout"), 0);



