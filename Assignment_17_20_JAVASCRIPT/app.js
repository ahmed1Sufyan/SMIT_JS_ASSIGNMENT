// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var twodArray = [[], [], []];

twodArray[0][0] = 1;
twodArray[0][1] = 2;
twodArray[1][0] = 3;
twodArray[1][1] = 4;
twodArray[2][0] = 5;
twodArray[2][1] = 6;

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

for (var i = 0; i < matrix.length; i++) {
  document.write("<h2>" + matrix[i] + "</h2>");
}

// ---------------OR---------------------
// we can also do this operation through nested loops

for (var i = 0; i < matrix.length; i++) {
   for (var j = 0; j < matrix[i].length; j++)
   {
    document.write("<strong>"+matrix[i][j] +"</strong>  ");
   } 
   document.write("<br>");
}


// 3. Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNumber = +prompt("Enter the table number");
var tableLength = +prompt("Enter the table length");

for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber+" x "+i+" = "+(tableNumber*i) + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index"+i+" is "+fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (var i = 1; i <= 15; i++) {
  document.write(i+" ");
}
document.write("<br>");
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var i = 10; i >= 1; i--) {
    document.write(i + " ");
}

document.write("<br>");
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (var i = 0; i <= 20; i += 2) {
    document.write(i + " ");
}

document.write("<br>");
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var i = 1; i <= 19; i += 2) {
    document.write(i + " ");
}

document.write("<br>");
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var i = 2; i <= 20; i+=2) {
    document.write( i  + "k ");
}
document.write("<br>");

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Enter the item to be searched");
var flag = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === searchItem) {
    document.write(searchItem + " is present in the list<br>");
    flag = true;
  }
}

if(!flag) {
    document.write(searchItem + " is not present in the list<br>");
}

// if the user wants to search an index also then the program will be

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Enter the item to be searched");
var flag = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === searchItem) {
    document.write(searchItem + " is present in the list at index : " + i + "<br>");
    flag=true;
    break;
  }
}

if(!flag && searchItem != null) {
    document.write(searchItem + " is not present in the list<br>");
}


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var A = [-100,-24, -53, -78, -91, -12];

var max = A[0];

for (var i = 0; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
}

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var A = [-100,-24, -53, -78, -91, -12];

var min = A[0];

for (var i = 0; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
    }
}

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + " ,");
    }
}