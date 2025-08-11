/* Task-11 (Break)
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
for (let i = 1; i <= 200; i++) {
  console.log(i);
  if (i == 100) {
    break;
  }
}

/*
Task-12(Break) 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
while (i <= 200) {
  console.log(i);
  if (i == 100) {
    break;
  }
  i++;
}

/*
Task-13 (Break)
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 1; i <= 100; i++) {
  console.log(i);
  let squareValue = 9;
  if (i === squareValue) {
    console.log(i);
    break;
  }
}

/* 
Task-14 (continue)
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}

/*
Task-15 (continue)
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (let i = 55; i <= 85; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

/***
 * Task-15 (For)
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
/*programming hero*/
for (let i = 1; i <= 60; i++) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

/***
Task-16 (For)

Subtask-1:
Find all the odd numbers from 61 to 100.
Subtask-2:
Find all the even numbers from 78 to 98.
 */
for (let i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log("Odd Number:", i);
  }
}
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log("Even Number:", i);
  }
}

/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.

Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
for (let i = 51; i <= 85; i++) {
  let sum2 = 0;
  if (i % 2 === 0) {
    sum2 = sum2 + i;
    console.log("Sum of odd numbers:", sum2);
  }
  console.log("Sum of odd numbers:", sum2);
}
