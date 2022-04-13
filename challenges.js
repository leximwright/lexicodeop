/*------------------
1)
Finish creating the object below.
Add three more keys and values!
------------------*/
const person = {
  name: "Sofia",
  age: 20
}

console.log(person);

/*------------------
2)
Access the name value from
the person object.

Hint: you may use either dot notation or
bracket notation. 
------------------*/

// console.log("The person's name is:", ???)

/*------------------
3)
Update the person's name to
"Marco". Don"t change the original
object– do an update by reassigning
the value. If you do this correctly,
the printed statement will be true.
------------------*/


// console.log("The person"s name has been updated:", (person.name === "Marco"));

/*------------------
4)
Fix the statement so that it prints
what is expected!
------------------*/

const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/"
};

console.log("The book " + book + " was written by " + author + " and is " + pages + " pages.");

/*------------------
5)
Time to learn something new! There"s a new way of
writing a string– it is called a template literal. 
You can learn more about it here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

1) Encapsulate the entire string in backticks: ``
2) Anytime you want to add JavaScript (or a variable name),
encapsulate that part in a dollar sign and brackets: ${}
3) Everything else is assumed to be a string!

Finish filling out the statement below. 
From now, on we will be switching between template literals
and quotations for console.logs.
------------------*/

// console.log(`The book ${book.title} was written by ${} and is ${} pages.`);

/*------------------
6)
Fix the statement so that it prints
what is expected! You may use dot notation
or bracket notation– look back at the slides
if you forgot how to access values from 
nested objects.
------------------*/

let user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
      name: "Sofia",
      address: {
          line1: "Carrer de CodeOp",
          line2: "42",
          city: "Barcelona",
          country: "Spain"
      }
  }
}

// console.log(`${name} lives at ${line1} ${line2}, ${city}, ${country}.`);


/*------------------
7)
Update the user's email and address
so that the console.log statement
prints true!

The new email should be "sofia@prod.com"
and the new city should be "Madrid".
------------------*/

// console.log("The person's name has been updated:", (user.email === "sofia@prod.com") && (user.personalInfo.address.city === "Madrid"));

/*------------------
8)
Create a new object from scratch.
Name this variable "animal".
Then, choose an animal, and describe it–
include things like color, type,
food, etc. Make at least one nested object.
------------------*/

// console.log(`The data type of ${animal} is a ${typeof animal}`);


/*------------------
9)
Update at least one value
in your object. Write your own
console.log statement to test this
(look at questions 3 or 6 for an idea).
------------------*/

// console.log(`The data type of ${animal} is a ${typeof animal}`);


/*------------------
10)
There are three bugs in the object
below. Find them and fix them!
------------------*/

// let user2 = {
//   id: 102,
//   email: "pedro@dev.com"
//   personalInfo: {
//       name: Pedro,
//       address: {
//           line1: "Carrer de CodeOp",
//           line2: "42",
//           city; "Barcelona",
//           country: "Spain"
//       }
//   }
// }

/*------------------
11)
Go back through all of your previous
code. Comment out every line where you
used either dot notation or bracket notation, 
and then rewrite that line using the opposite.
Make sure your code still works!
------------------*/
