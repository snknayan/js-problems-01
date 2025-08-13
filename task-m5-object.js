//Task-26 Access the golden rod color value in output.
/* const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
const result = colors["golden rod"];
console.log(result);
 */

//Task-27  For this object below add a property named passenger capacity with value 5

/* const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car);
car["passenger capacity"] = 5;
console.log(car); */

// Task-28 Display the physics marks as output.

/* const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
const result = student.physics.marks;
console.log(result);
 */

// Task-29  Count the number of properties.

/* let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const propertiesNumber = Object.keys(student).length;
console.log(propertiesNumber);
 */

// Task-30(Object) Loop through an object and print the key-value pairs with their types
/* Output:
key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean */

/* let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let mySubObject in myObject) {
  const propValue = typeof myObject[mySubObject];
  console.log("Key: ", mySubObject, "| type: ", propValue);
} */

//todo: String Related Problem

/* Task-31:
Count how many times a string has the letter a */

/* const name = "nayan";
let i = 0;

for (let i = 0; i <= name.length - 1; i++) {
  let count = 0;
  let str = name[i];
  if (str === "a") {
    count++;
    console.log("total a count: ", count);
  }
} */

// Task-32:
/* Count how many times a string has the letter a or A */

/* const name = "nayAn kumAr das";
let i = 0;

for (let i = 0; i <= name.length - 1; i++) {
  let count = 0;
  let str = name[i];
  if (str === "a" || str === "A") {
    count++;
    console.log("total a count: ", count);
  }
} */

// Task-33:
/* Check whether a string contains all the vowels a, e, i, o, u */
/* const name = "nayAn kumAr das";
let i = 0;
for (let i = 0; i <= name.length - 1; i++) {
  let str = name;
  if (
    str === "a" ||
    str === "A" ||
    str === "e" ||
    str === "E" ||
    str === "i" ||
    str === "I" ||
    str === "o" ||
    str === "O" ||
    str === "u" ||
    str === "U"
  ) {
    console.log("Yes contains all vowel!");
  } else {
    console.log("No Not have all the vowel!");
  }
}
 */
//Task-34
//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

/* const str = "maxmaximum";
const strHaveOrNot = str.includes("x");
console.log(strHaveOrNot);
if (strHaveOrNot === true) {
  console.log("x Have please replace with y");
  //   const newStr = str.replace("x", "y"); Ekta word replace er jonnno but eker odhik chaile replaceall() dibo
  const newStr = str.replaceAll("x", "y"); // all x replace by y in string
  console.log(newStr);
} */

// Task-35:
/* Capitalize Every first Letter of each word in a String */

const str = "bangladesh is a land of all possibilities";
const everyWords = str.split(" ");
let capitalWords = [];
console.log(everyWords);

/* let i = 0;
for (let words of everyWords) {
  console.log(words); */
for (let i = 0; i < everyWords.length; i++) {
  let word = everyWords[i];
  console.log(word);
  if (word.length > 0) {
    let firstLetter = word.charAt(0).toLocaleUpperCase();
    //console.log(firstLetter);
    let restWord = word.slice(1);
    // console.log(restWord);
    capitalWords.push(firstLetter + restWord);
    // console.log(capitalWords);
  } else {
    capitalWords.push(" ");
  }
  let result = capitalWords.join(" ");
  console.log(result);
}
//   wordsUpper = words[0].toUpperCase();
//   console.log(wordsUpper);
//   let count = 0;
//   while (count <= words.length - 1) {
//     let upperW = words[count].toUpperCase();

//     count++;
//   }
//   console.log(upperW);
//}

/* const str = "bangladesh is a land of all possibilities";
const everyWords = str.split(" ");
console.log(everyWords);
 */
