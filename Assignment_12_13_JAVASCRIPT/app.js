// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var character = prompt("Enter a character")

if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
    document.write(character + " is an uppercase letter")
} else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
    document.write(character + " is a lowercase letter")
} else if (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57) {
    document.write(character + " is a number")
} else {
    document.write(character + " is not a letter")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = prompt("Enter a number")
var num2 = prompt("Enter another number")

if (+num1 > +num2) {
    document.write(num1 + " is larger than " + num2)
} else if (+num2 > +num1) {
    document.write(num2 + " is larger than " + num1)
} else {
    document.write(num1 + " is equal to " + num2)
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = prompt("Enter a number")

if (+number > 0) {
    document.write(number + " is positive")
} else if (+number < 0) {
    document.write(number + " is negative")
} else {
    document.write(number + " is zero")
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter a character")

if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
    document.write(true)
} else {
    document.write(false)
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = "pass123"

var userPassword = prompt("Enter your password")
if(!userPassword)
    document.write(" Please enter your password")
else if (userPassword == password) {
    document.write("Correct! The password you entered matches the original password")
} else {
    document.write("Incorrect password")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) 
greeting = "Good day";
else
greeting = "Good evening";



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Enter a time")

if (time > 0 && time < 1200) {
    document.write("Good morning")
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon")
} else if (time >= 1700 && time < 2100)  {
    document.write("Good evening")
} else if (time >= 2100 && time <= 2359) {
    document.write("Good night")
} else {
    document.write("Invalid time")
}