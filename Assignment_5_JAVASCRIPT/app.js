// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");

document.write("<h1>MINI CALCULATOR</h1>");
//Additiion
var result = +num1 + +num2;
document.write("sum of " + num1 + " and " + num2 + " is : " + result + "</br>");

// Subtraction
var result1 = +num1 - +num2;
document.write(
  "Subtraction of " + num1 + " and " + num2 + " is : " + result1 + "</br>"
);

// Multiplication
var result2 = +num1 * +num2;
document.write(
  "Multiplication of " + num1 + " and " + num2 + " is : " + result2 + "</br>"
);

// Division
var result3 = +num1 / +num2;
document.write(
  "Division of " + num1 + " and " + num2 + " is : " + result3 + "</br>"
);

// Modulus
var result4 = +num1 % +num2;
document.write(
  "Modulus of " + num1 + " and " + num2 + " is : " + result4 + "</br>"
);

// here is one thing which is performing  an operations in a repitive manner
// we can avoid it by using functions

var num1 = prompt("Enter your first number");
var num2 = prompt("Enter your second number");
var op = prompt("Enter your operator you want to perform");

function Calculation(num1, num2, op) {
  if (op == "+") {
    var result = +num1 + +num2;
    document.write(
      "sum of " + num1 + " and " + num2 + " is : " + result + "</br>"
    );
  } else if (op == "-") {
    var result1 = +num1 - +num2;
    document.write(
      "Subtraction of " + num1 + " and " + num2 + " is : " + result1 + "</br>"
    );
  } else if (op == "*") {
    var result2 = +num1 * +num2;
    document.write("Multiplication of " +num1 +" and " +num2 +" is : " +result2 +"</br>");
  } else if (op == "/") {
    var result3 = +num1 / +num2;
    document.write(
      "Division of " + num1 + " and " + num2 + " is : " + result3 + "</br>"
    );
  } else if (op == "%") {
    var result4 = +num1 % +num2;
    document.write(
      "Modulus of " + num1 + " and " + num2 + " is : " + result4 + "</br>"
    );
  } else {
    document.write("Invalid operator");
  }
}

Calculation(num1, num2, op);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
var value;
document.write("Value after declaration is " + value + "</br>");
value = 23;
document.write("Initial value : " + value + "</br>");
value++;
document.write("value after increment is : " + value + "</br>");
value += 7;
document.write("value after addition is : " + value + "</br>");
value--;
document.write("value after decrement is : " + value + "</br>");
value %= 3;
document.write("The remainder is : " + value + "</br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var costOfMovieTicket = 600;

var totalCost = costOfMovieTicket * 5;

document.write("Total cost of 5 tickets is : " + totalCost + " PKR</br>");

// we can also do this operation through user input

var costOfMovieTicket = 600;
var totalTickets = prompt("Enter the Quantity of tickets");
var totalCost = costOfMovieTicket * +totalTickets;

document.write("Total cost of 5 tickets is : " + totalCost + " PKR</br>");

// 5. Write a script to display multiplication table of any number in your browser.

var number = prompt("Enter the number to show multiplication table");

function multiplicationTable(num) {
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
multiplicationTable(+number);

// we can also do this using loops

var number = prompt("Enter the number to show multiplication table");

function multiplicationTable2(num) {
  for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "</br>");
  }
}
multiplicationTable2(+number);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var tempCelsius = 33;
var calculatedCelsius = (tempCelsius * 9) / 5 + 32;
document.write(tempCelsius + " °C is " + calculatedCelsius + " °F </br>");

var tempFarheneit = 91;
var calculateFahrenheit = ((tempFarheneit - 32) * 5) / 9;
document.write(tempFarheneit + " °F is " + calculateFahrenheit + " °C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var priceItem1 = 650;
var priceItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;

var totalCost =
  priceItem1 * quantityOfItem1 + priceItem2 * quantityOfItem2 + shippingCharges;
document.write("<h1>Shopping Cart</h1> </br>");
document.write("Price of Item1 is " + priceItem1 + "</br>");
document.write("Quantity of Item1 " + quantityOfItem1 + "</br>");
document.write("Price of Item2 is " + priceItem2 + "</br>");
document.write("Quantity of Item2 " + quantityOfItem2 + "</br>");
document.write("shipping charges are " + shippingCharges + "</br> </br>");
document.write("Total cost of your order is " + totalCost + "</br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marksheet</h1> </br>");

document.write("Total Marks : " + totalMarks + "</br>");

document.write("Marks Obtained : " + marksObtained + "</br>");

document.write("Percentage : " + percentage + " % </br>");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var dollars = 10;
var Riyals = 25;
var totalCurrencyPKR = dollars * 104.8 + Riyals * 28;

document.write("<h1>Currency in PKR</h1> </br>");
document.write("Total currency in PKR : " + totalCurrencyPKR + "</br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 5;
var calculate = ((number + 5) * 10) / 2;

document.write(calculate + "</br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2023;
var birthYear = 2000;
var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1> </br>");

document.write("Current Year : " + currentYear + "</br>");

document.write("Birth Year : " + birthYear + "</br>");

document.write("Your Age is : " + age + "</br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;

var circumference = 2 * Math.PI * radius;

var area = Math.PI * radius * radius;

document.write("<h1>The Geometrizer</h1> </br>");
document.write("Radius of a Circle : " + radius + "</br>");
document.write("The Circumference is : " + circumference + "</br>");
document.write("The Area is : " + area.toFixed(1) + "</br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "Biscuits";
var currentAge = 15;
var maximumAge = 65;
var estimatedAmountPerDay = 3;
var lifetimeSupply = estimatedAmountPerDay * (maximumAge - currentAge);

document.write("<h1>The Lifetime Supply Calculator</h1> </br>");
document.write("Your favorite snack is : " + favoriteSnack + "</br>");
document.write("Your current age is : " + currentAge + "</br>");
document.write("Your maximum age is : " + maximumAge + "</br>");
document.write(
  "Your estimated amount per day is : " + estimatedAmountPerDay + "</br>"
);
document.write("You will need " +lifetimeSupply +" to last you until the ripe old age of " +maximumAge +"</br>"
);
