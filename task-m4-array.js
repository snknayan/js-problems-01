/* Task-21
 1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */

/* const fruits = ["apple", "mango", "grape", "banana", "jackfruit"];
console.log(fruits[2]);
fruits[1] = "jambura";
console.log(fruits);
 */

/* Task-22

2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */

/* const touristDestination = ["kashmir", "venis", "istambul"];
console.log(touristDestination);

touristDestination.push("bali");
console.log(touristDestination);

touristDestination.push("india", "nepal");
console.log(touristDestination);

touristDestination.pop();
console.log(touristDestination); */

/* Task-23 
3. Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not. */

/* const books = [
  "c book",
  "python book",
  "react book",
  "javascript book",
  "node js book",
];

if (books.includes("python book")) {
  console.log("Yes i have");
} else {
  console.log("I don't have");
} */

/* Task-24
  4. Checking if it's an Array
Instructions:
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not. */

/* const a = 10;
const b = "nayan";
const c = {
  name: "Hasan",
  age: 22,
  name: "Rahman",
  age: 28,
};
const d = [12, 14, 34, 56, 78];
const e = [];
const f = true;

const result = Array.isArray(d);
console.log(result, typeof d);
 */

/* Task-25
 5. Combining Arrays
Instructions:
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

/* const groupOne = ["nayan", 12, true, "hasan"];
const groupTwo = ["abul", "babul", 14, 56, false];

console.log(groupOne);
console.log(groupTwo);

const combineGroup = groupOne.concat(groupTwo);
console.log(combineGroup); */
