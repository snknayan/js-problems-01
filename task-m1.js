/*Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:  The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:  Print the result.

Sample Input:
1000
700
Sample Output:
300
*/
const apple = 500;
const orange = 450;
const giveMoney = 1000;
const getBackMoney = giveMoney - (apple + orange);
console.log("Your Back Money Is:", getBackMoney);

/* Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:  The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:  Print the result in 2 decimal places. 

Sample Input:
75.25, 65, 80, 35.45, 99.50
Sample Output:
71.04*/

const math = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.5;
const totalSubject = 5;
const totalMarks = math + biology + chemistry + physics + bangla;
const avgMarks = totalMarks / totalSubject;
console.log("average is:", avgMarks.toFixed(2));

/* Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:   The first line of the input contains the number.
Output:  Print the remainder.

Sample Input:
119
Sample Output:
4
 */
