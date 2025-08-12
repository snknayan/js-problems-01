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
