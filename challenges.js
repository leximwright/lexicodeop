/*------------------
1)
In the loop below, fix the
statement inside the body of the
do loop so that the console 
prints the numbers from 0-10.
------------------*/
let count =1;

do {
  console.log(10);
  count++;
}
while (count <= 10);


for (var input = 1; input <= 10; input++) {
  console.log(input);
  }

/*------------------
2)
Create a loop that counts
up to 100.
------------------*/

var countingUp = 1;
var i = 0;

function count() {

    i += (1 * countingUp);

    if (i == 100 || i == 0)
    {
        countingUp *= -1;
    }

/*------------------
3)
Create a loop that counts
down from 100.
------------------*/


/*------------------
4)
Add a console.log statement
in the body of the loop below
so that it prints the numbers
from zero to four.
------------------*/

// const start = 5;
// const end = 0;

// while (start > end) {
//   end++;
// }


/*------------------
5)
Add a JavaScript expression
inside the ${} so that it prints
the difference between the capacity
and the count of people.
------------------*/

// const people = 1;
// const capacity = 12;

// for (let people = 1; people <= capacity; people++) {
//   console.log(`There is room for ${} more guests in the building`);
// }


/*------------------
6)
Add all EVEN numbers between 0 and 50.
Print output in console.log at the end.

Hint: increase your count by two each
time you iterate!
------------------*/



/*------------------
7)
Now, create a for loop that prints
ALL numbers between 0 and 50
to the console.

Add an if/else statement within the
body of the loop. If the number (x) is 
even, print `The number ${x} is even`.
If the number (x) is odd, print
`The number ${x} is odd`.
------------------*/


/*------------------
8)
Let's try something new. 

To select a character in a string,
use "charAt()", and insert the number
you want to access inside the parentheses.
For example: "Sofia".charAt(0) is "S"
and "Sofia".charAt(2) is "f"

Using ".toUpperCase" converts a letter to
uppercase.

Make ONE change in the code below so
that every other letter is uppercase.
------------------*/

// const sentence = "i am shouting";
// const numberOfChars = 12;
// let result = "";
// let i = 0;

// while (i <= numberOfChars) {
//   let letter = sentence.charAt(0);
//   if (i % 2 === 0) {
//     letter = letter.toUpperCase();
//   }
//   result += letter;
//   i++;
// }

// console.log(result);


/*------------------
9)
Write a program that uses console.log to
print all the numbers from 1 to 100.

Now, for all numbers divisible by 3,
print "Fizz" instead of the number.
For numbers divisible by 5,
print "Buzz" instead.
For numbers divisible by BOTH 5 & 3, 
print "FizzBuzz".

This is a very common interview question.
Good luck!
------------------*/



/*------------------
10)
Create the triangle below by writing
a loop that makes five calls to console.log.

*
**
***
****
*****
------------------*/

//Making A Triangle
{for (var result = "*"; result.length <=5; result = result + "*")
console.log(result);}