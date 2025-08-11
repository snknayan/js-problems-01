/***
 * Task-05 - Free Drinks
   - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burger = 500;
if (burger >= 500) {
  console.log("Free Coke");
} else {
  console.log("Coke: 30tk");
}

/*** 
Task -06 BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

const weight = 52;
const height = 1.6764;
bmi = weight / (height * height);
console.log(bmi);
if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese");
}

/* function bodyMassIndex(weight, height) {
  const bmi = weight / (height * height);
  console.log(bmi);

  if (bmi < 18.5) {
    const result = console.log("You are underweight.");
    return result;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    const result = console.log("You are normal.");
    return result;
  } else if (bmi >= 25 && bmi <= 29.9) {
    const result = console.log("You are overweight.");
    return result;
  } else {
    const result = console.log("You are obese");
    return result;
  }
  const bodyMI = bodyMassIndex(80, 1.6764);
  console.log(bodyMI);
} */

/***
Task-07 Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/

const marks = 50;
if (marks >= 90 && marks <= 100) {
  console.log("GPA: A");
} else if (marks >= 80 && marks <= 89) {
  console.log("GPA: B");
} else if (marks >= 70 && marks <= 79) {
  console.log("GPA: C");
} else if (marks >= 60 && marks <= 69) {
  console.log("GPA: D");
} else if (marks >= 0 && marks <= 59) {
  console.log("GPA: F");
}

/***

Task-08 if you get more then 80 then inside your friend score. 

    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myMarks = 80;
const friendsMarks = 89;
if (myMarks >= 80) {
  //   console.log("Hello");
  if (friendsMarks > 80) {
    console.log("Go for lunch!");
  } else if (friendsMarks < 80 && friendsMarks >= 60) {
    console.log("Good luck next time!");
  } else if (friendsMarks < 60 && friendsMarks >= 40) {
    console.log("Message Unseen!");
  } else if (friendsMarks < 40) {
    console.log("Blocked!");
  }
} else {
  console.log("Go to Home & Sleep!");
}

/***
Task-09 you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 
also, write it using ternary operator.
 */

const num1 = 2;
const num2 = 8;
if (num1 > num2) {
  const result = num1 * 2;
  console.log("Double Number Is:", result);
} else {
  const result = num1 + num2;
  console.log("Summation of two numbers are:", result);
}

//Using ternary operator OR conditional operator
const x = 2;
const y = 8;
x > y ? console.log(x * 2) : console.log(x + y);

/***
Task-10  Ticket fare Calculator

    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 52;
if (age < 10) {
  console.log("Free");
} else if (age === "student") {
  console.log("50% Discount");
} else if (age >= 60) {
  console.log("15% Discount");
} else {
  console.log("Ticket Fair 800 Taka");
}
