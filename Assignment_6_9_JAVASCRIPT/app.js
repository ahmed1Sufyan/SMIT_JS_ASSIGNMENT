// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var num = prompt("Enter a number");
num = +num;

document.write("Result: </br>");

document.write("The value of num is : " + num + "</br>");
document.write("-------------------------------- </br></br>");

document.write("The value of ++num is : " + ++num + "</br>");
document.write("Now the value of num is : " + num + "</br></br>");

document.write("The value of num++ is : " + num++ + "</br>");
document.write("Now the value of num is : " + num + "</br></br>");

document.write("The value of --num is : " + --num + "</br>");
document.write("Now the value of num is : " + num + "</br></br>");

document.write("The value of num-- is : " + num-- + "</br>");
document.write("Now the value of num is : " + num + "</br></br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

document.write("Result: </br>");

document.write("The value of a is : " + a + "</br>");

document.write("The value of b is : " + b + "</br>");

document.write("The value of result is : " + result + "</br>");

// Explain the output at each stage:
// --a; in this statement pre-decrement operator is used it will decrement the current value
// of a when it is used in the same expression after the execution ans of this statement will be 1

// --a - --b; there is also pre-decrement operator is used with b the ans of this
// statement will be 1 - 0 = 1

// --a - --b + ++b; there is pre-increment operator is used with b which increment the value
// of b at same statement the ans of this statement will be 1 - 0 + 1 = 2

// --a - --b + ++b + b--; at last there is post-decrement operator is used with b
// that mean it will decrement the value of b right after the execution of this statement
//finally the ans of this statement will be 1 - 0 + 1 + 1 = 3

// 3. Write a program that takes input a name from user &
// greet the user

var name = prompt("Enter your name");

document.write("Hello " + name + "!");

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.


// we can do multiplication with multiple ways 
var number = prompt("Enter the number to show multiplication table");
number = +number;
function multiplicationTable(num) {
    if(num == 0) num = 5 ;
    document.write(num + " x 1 = " + num * 1 + "</br>");
    document.write(num + " x 2 = " + num * 2 + "</br>");
    document.write(num + " x 3 = " + num * 3 + "</br>");
    document.write(num + " x 4 = " + num * 4 + "</br>");
    document.write(num + " x 5 = " + num * 5 + "</br>");
    document.write(num + " x 6 = " + num * 6 + "</br>");
    document.write(num + " x 7 = " + num * 7 + "</br>");
    document.write(num + " x 8 = " + num * 8 + "</br>");
    document.write(num + " x 9 = " + num * 9 + "</br>");
    document.write(num + " x 10 = " + num * 10 + "</br>");
}
multiplicationTable(number);

// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = prompt("Enter subject 1 name");
var subject2 = prompt("Enter subject 2 name");
var subject3 = prompt("Enter subject 3 name");

var obtMarks1 = prompt("Enter subject 1 marks");
var obtMarks2 = prompt("Enter subject 2 marks");
var obtMarks3 = prompt("Enter subject 3 marks");

var totalmarks1 = 100;
var totalmarks2 = 100;
var totalmarks3 = 100;

var totalmarks = totalmarks1 + totalmarks2 + totalmarks3;
var obtMarks = +obtMarks1 + +obtMarks2 + +obtMarks3;

var percentSub1 = (obtMarks1 / totalmarks1) * 100;
var percentSub2 = (obtMarks2 / totalmarks2) * 100;
var percentSub3 = (obtMarks3 / totalmarks3) * 100;
var percentage = (obtMarks / totalmarks) * 100

document.write("Subject  Total Marks  Obtained Marks  Percentage</br>")
document.write(subject1+"  "+totalmarks1+"  "+obtMarks1+"  "+percentSub1+"</br>")
document.write("  "+subject2+"  "+totalmarks2+"  "+obtMarks2+"  "+percentSub2+"</br>")	
document.write("  "+subject3+"  "+totalmarks3+"  "+obtMarks3+"  "+percentSub3+"</br>")
document.write("&nbsp&nbsp&nbsp"+totalmarks+"   "+obtMarks+"    "+percentage)


