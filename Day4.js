// function cb() {
//   console.log("callback");
// }

// setTimeout(cb, 100);

// console.log("end");

// async function test() {
//   console.log("A");
//   setTimeout(() => console.log("B"), 0);
//   await null;
//   console.log("C");
// }

// // Conceptual Engine Transformation - rewriting async/await using Promises
// function test() {
//   return Promise.resolve()
//     .then(() => {
//       console.log("A");
//       setTimeout(() => console.log("B"), 0);
//       return null;
//     })
//     .then(() => {
//       console.log("C");
//     });
// }

// // Another way to write the same function
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve(null).then(() => console.log("C"));

// test();

// Functional Programming

// Map

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculateArea = radius.map(area);
console.log(calculateArea);

// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = function (number) {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// reduce method - find the sum of the array

const sum = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0,
);

console.log("sum", sum);

// reduce method - find max

const max = numbers.reduce((acc, curval) => {
  if (acc < curval) return curval;
  return acc;
}, 0);

console.log(max);

const nums2 = [1, 2, 3, 4, 5, 6];
const Even = nums2.filter((num) => num % 2 === 0);

console.log(Even);

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = words.reduce((allnames, name) => {
  const currentcount = allnames[name] ?? 0;
  allnames[name] = currentcount + 1;
  return allnames;
}, {});

function calculateFrequencyOfWords(words) {
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    const wordCount = obj[words[i]] ?? 0;
    obj[words[i]] = wordCount + 1;
  }

  return obj;
}

console.log(calculateFrequencyOfWords(words));

let frequency2 = {};

console.log("---->frequency", frequency);

const prices = [100, 200, 300];
const totalAmountWithtax = prices
  .map((p) => p + p * 0.1)
  .reduce((acc, currentvalue) => acc + currentvalue, 0);

console.log("prices", totalAmountWithtax);

const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];

const groupbyAge = people.reduce((acc, people) => {
  acc[people.age] = people.name;
}, {});

console.log(groupbyAge);
