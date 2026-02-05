// =====================================================
// JavaScript map / filter / reduce Practice Questions
// =====================================================

/* -----------------------------------------------------
   Question 1 — map (Easy)
   Double each number
----------------------------------------------------- */
const nums1 = [1, 2, 3, 4];

const double = nums1.map((num) => 2 * num);

console.log(double);
// Expected output: [2, 4, 6, 8]

/* -----------------------------------------------------
   Question 2 — filter (Easy)
   Keep only even numbers
----------------------------------------------------- */
const nums2 = [1, 2, 3, 4, 5, 6];
const isEven = nums2.filter((num) => num % 2 === 0);
console.log(isEven);
// Expected output: [2, 4, 6]

/* -----------------------------------------------------
   Question 3 — map + filter (Easy)
   Get squares of odd numbers
----------------------------------------------------- */
const nums3 = [1, 2, 3, 4, 5];
const squaresOfOddNumbers = nums3
  .filter((num) => num % 2)
  .map((num) => num * num);

console.log(squaresOfOddNumbers);
// Expected output: [1, 9, 25]

/* -----------------------------------------------------
   Question 4 — reduce (Easy)
   Find the sum of numbers
----------------------------------------------------- */
const nums4 = [10, 20, 30];
const sum = nums4.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0,
);

console.log(sum);
// Expected output: 60

/* -----------------------------------------------------
   Question 5 — reduce (Medium)
   Find the maximum number
----------------------------------------------------- */
const nums5 = [5, 12, 3, 21, 7];

const max = nums5.reduce((acc, currentvalue) => {
  if (acc < currentvalue) return currentvalue;
  return acc;
}, 0);
// Expected output: 21

/* -----------------------------------------------------
   Question 6 — reduce (Medium)
   Count frequency of words
----------------------------------------------------- */
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = words.reduce((allnames, name) => {
  const currentcount = allnames[name] ?? 0;
  allnames[name] = currentcount + 1;
  return allnames;
}, {});

console.log("---->frequency", frequency);
// Expected output: { apple: 3, banana: 2, orange: 1 }

/* -----------------------------------------------------
   Question 7 — map + reduce (Medium)
   Convert array of prices to total with tax (10%)
----------------------------------------------------- */
const prices = [100, 200, 300];
const totalAmountWithtax = prices
  .map((p) => p + p * 0.1)
  .reduce((acc, currentvalue) => acc + currentvalue, 0);
// Expected output: 660

/* -----------------------------------------------------
   Question 8 — reduce (Hard)
   Flatten a 2D array
----------------------------------------------------- */
const matrix = [[1, 2], [3, 4], [5]];
// use concat method to flatten the array

const matrixResult = matrix.reduce((a, b) => a.concat(b), []);
// Expected output: [1, 2, 3, 4, 5]

/* -----------------------------------------------------
   Question 9 — filter + reduce (Hard)
   Sum of even numbers only
----------------------------------------------------- */
const nums9 = [1, 2, 3, 4, 5, 6];
const sumOfEvenNumbers = nums9
  .filter((num) => num % 2 === 0)
  .reduce((acc, currentvalue) => acc + currentvalue, 0);

console.log("sumOfEvenNumbers", sumOfEvenNumbers);
// Expected output: 12

/* -----------------------------------------------------
   Question 10 — reduce (Hard)
   Group people by age
----------------------------------------------------- */
const people = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];

const groupbyAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person.name);
  return acc;
}, {});
// Expected output:
// { 20: [{...}, {...}], 30: [{...}] }
