// 1. Declare an empty array using JS literal notation to store
// student names in future.

var students = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var students = new Array();

// 3. Declare and initialize a strings array.

let x = [];
x[0] = "foo";
x[1] = "bar";
x[2] = "Baz";

//------------ OR-----------------

let y = ["foo", "bar", " Baz"];

// 4. Declare and initialize a numbers array.

let number = [];
number[0] = 1;
number[1] = 2;
number[2] = 3;

//------------ OR-----------------

let numbers = [1, 2, 3, 4, 5, 6, 7];

// 5. Declare and initialize a boolean array.

let booleans = [true, false, false, true, false];

let boolean = [];

boolean[0] = true;
boolean[1] = false;
boolean[2] = true;
boolean[3] = false;

// 6. Declare and initialize a mixed array.

let mixArrays = ["Sufyan Ahmed", 23, true, null, undefined, false];

let mixedArray = [];
mixedArray[0] = true;
mixedArray[1] = "Sufyan";
mixedArray[2] = null;
mixedArray[3] = undefined;

// we can also do this task using push and unshift ,splice methods

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h3>Qualifications:</h3> <br>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentsName = ["Sufyan Ahmed", "Bilal Riaz", "Ahtesham Mustafa"];
var studentMarks = [350, 450, 400];
var totalMarks = 500;
var studentsPercent = [
  (studentMarks[0] / totalMarks) * 100,
  (studentMarks[1] / totalMarks) * 100,
  (studentMarks[2] / totalMarks) * 100,
];

document.write(
  "Score of " +
    studentsName[0] +
    " is " +
    studentMarks[0] +
    ". Percentage : " +
    studentsPercent[0] +
    "% <br>"
);
document.write(
  "Score of " +
    studentsName[1] +
    " is " +
    studentMarks[1] +
    ". Percentage : " +
    studentsPercent[1] +
    "% <br>"
);
document.write(
  "Score of " +
    studentsName[2] +
    " is " +
    studentMarks[2] +
    ". Percentage : " +
    studentsPercent[2] +
    "% <br>"
);

// there is a repititive work so we can also do this work through loops

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

const colors = ['Red', 'Green', 'Blue'];

document.write('<b>Original Array:</b><br>');
document.write(colors + '<br>');

// a
const insertAtStart = prompt('Enter a color you want to add in the begining:');
colors.unshift(insertAtStart);
document.write('<br> Updated Array After adding color in the begining: <br>');
document.write(colors + '<br>');

// b
const insertAtEnd = prompt('Enter a color you want to add in the end:');
colors.push(insertAtEnd);

document.write('<br> Updated Array After adding color in the End: <br>');
document.write(colors + '<br>');


// c
colors.unshift('Pink');
colors.unshift('Crimson');

document.write('<br> Updated Array After adding color in the Beginning: <br>');
document.write(colors + '<br>');


// d
//Delete the first element from the array
colors.shift();

document.write('<br> Updated Array After deleting color from the Beginning: <br>');
document.write(colors + '<br>');

// e
colors.pop();
document.write('<br> Updated Array After deleting color from the end: <br>');
document.write(colors + '<br>');


const index = parseInt(prompt('Enter the index where you want to add a color:'));
const color = prompt('Enter the color to add in the given array:');
colors.splice(index, 0,color);
document.write('<br> Updated Array After adding color at specific index: <br>');
document.write(colors + '<br>');


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method

var studentScores = [350, 89, 450, 120, 100, 550];
studentScores.sort();

console.log(studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ["Karachi", "Lahore", "Hyderabad", "Peshawar"];
var selectedCities = [cities.slice(0, 3)];
console.log(selectedCities);
var selectedCities = [cities.splice(0, 3)];
console.log(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This ", "is ", "my ", "cat "];
console.log(arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var arr = [];

arr.push("keyBoard");
arr.push("Mouse");
arr.push("Printer");
arr.push("monitor");

document.write("Devices " + arr);
document.write("<br><br>");

document.write("Out: </br>" + arr.shift() + "</br>");
document.write("Out: </br>" + arr.shift() + "</br>");
document.write("Out: </br>" + arr.shift() + "</br>");
document.write("Out: </br>" + arr.shift() + "</br>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var arr = [];

arr.push("keyBoard");
arr.push("Mouse");
arr.push("Printer");
arr.push("monitor");

document.write("Devices " + arr);
document.write("<br><br>");

document.write("Out: </br>" + arr.pop() + "</br>");

document.write("Out: </br>" + arr.pop() + "</br>");

document.write("Out: </br>" + arr.pop() + "</br>");

document.write("Out: </br>" + arr.pop() + "</br>");

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("Manufacturers:");


document.write(`
    <select name="cars" id="cars">
  <option value=${manufacturers[0]}>${manufacturers[0]}</option>
  <option value=${manufacturers[1]}>${manufacturers[1]}</option>
  <option value=${manufacturers[2]}>${manufacturers[2]}</option>
  <option value=${manufacturers[3]}>${manufacturers[3]}</option>
  <option value=${manufacturers[4]}>${manufacturers[4]}</option>
  <option value=${manufacturers[5]}>${manufacturers[5]}</option>
  </select>`);

//   -------------OR------------------

var man = manufacturers.map(
    (currenvalue, index) =>
      `<option value=${manufacturers[index]}>${manufacturers[index]}</option>`
  );
  
  document.write(`
          <select name="cars" id="cars">
              ${man}      
        </select>`);
  // })
  