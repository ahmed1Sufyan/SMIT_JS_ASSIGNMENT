// QUESTION : 1
//  Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// ------------------------- Question : 1 --------------------------------

// const city = prompt("Enter city Name")

// if(city.toLowerCase() == "karachi")
// {
//     // There are also different way to display the output
//     // console.log("Welcome to city of Lights")
//     // document.write("<h1>Welcome to city of Lights</h1>")
//         alert("Welcome to city of Lights")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// -------------------------- QUESTION : 2 --------------------------------------

// const gender = prompt("Enter your Gender")

// if(gender.toLowerCase() =="male")
// {
//     // There are also different way to display the output
//     document.write("<h1>Good Morning! Sir</h1>")
// }
// else if(gender.toLowerCase() == "female")
// {
//     document.write("<h1>Good Morning! Ma'am</h1>")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal    color Message
// Red ----- Must Stop
// Yellow ---- Ready to move
// Green ---- Move now

// -------------------------------- QUESTION : 3 -------------------------------------

// const signal = prompt("Enter color of road traffic signal")

// if(signal.toLowerCase() == "red")
// {
//     document.write("<h1> Must Stop! </h1>")
// }
// else if(signal.toLowerCase() == "yellow")
// {
//     document.write("<h1> Ready to Move! </h1>")
// }
// else if(signal.toLowerCase() == "green")
// {
//     document.write("<h1> Move now! </h1>")
// }
// else {
//     document.write("<h1> Invalid Input </h1>")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// ------------------------------- QUESTION : 4 ---------------------------------------

// const remainingFuel = prompt("please! Enter the current fuel")

// if(+remainingFuel < 0.25)
// {
//     document.write("<h1>Please ! Refill the fuel in your car</h1>")
// }

// --------------------------- QUESTION : 5 ---------------------------------------

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // f.
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// -----------------------QUESTION : 6 -------------------------------------

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

//     Percentage                Grade       Remarks
// Greater than or equal to 80   A-one     Excellent
// Greater than or equal to 70     A          Good
// Greater than or equal to 60     B       You need to improve
//     Less than 60               Fail       Sorry

// Show the total marks, marks obtained, percentage, grade &
// remarks like

// const firstSubj = prompt("Enter Your first Subject Number!");
// const secondSubj = prompt("Enter Your Second Subject Number!");
// const thirdSubj = prompt("Enter Your Third Subject Number!");
// const markObtained = +firstSubj + +secondSubj + +thirdSubj;
// const totalMarks = prompt("Enter Your Total Marks ");

// const percentage =((markObtained / +totalMarks) * 100).toFixed(2);

// function Marksheet(totalMarks, markObtained, percentage, Grade, Remarks) {
//   document.write("<h1>MARK SHEET</h1> <br>");

//   document.write("<strong>Total Marks : </strong>" + totalMarks + "<br>");
//   document.write("<strong>Marks Obtained : </strong>" + markObtained + "<br>");
//   document.write("<strong>Percentage : </strong>" + percentage + "%  <br>");
//   document.write("<strong>Grade : </strong>" + Grade + "<br>");
//   document.write("<strong>Remarks : </strong>" + Remarks + "<br>");
// }
// if (percentage >= 80) {
//   Marksheet(totalMarks, markObtained, percentage, "A-one", "Excellent");
// } else if (percentage >= 70) {
//   Marksheet(totalMarks, markObtained, percentage, "A", "Good");
// } else if (percentage >= 60) {
//   Marksheet(totalMarks, markObtained, percentage, "B", "You need to Improve");
// } else if (percentage < 60) {
//   Marksheet(totalMarks, markObtained, percentage, "Fail", "Sorry");
// } else {
//   document.write("Invalid Input Please! Try Again");
// }

// ---------------------------------------- QUESTION : 7 -------------------------------

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// const secretNumber = (Math.random()*10).toFixed(0)
// const secretNumber = 6
// const guessNumber = prompt("Enter the Guess Number!")

// wec can also use random function of math use generate the secret number  

// if(+guessNumber === secretNumber)
// {
//     document.write("Bingo! Correct Answer")
// }
// else if(+guessNumber + 1 === secretNumber)
// {
//     document.write("Close enough to the correct answer")
// }
// else {
//     document.write("Sorry your Number is in-correct")
// }

// -----------------------------------------QUESTION : 8 --------------------------------------------
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3

// const number = prompt("Ënter Any Number")

// if(+number % 3 === 0)
// {
//     document.write(number + " is divisible by 3")
// }
// else 
// {
//     document.write(number + " is not divisible by 3")
// }


// ---------------------------------------------- QUESTION : 9 ------------------------------------


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// const number = prompt("Enter any Number to check whether it is even or odd")

// if(+number % 2 === 0)
// {
//     document.write("You have Entered : " + number + " which is EVEN!")
// }
// else{
    
    //     document.write("You have Entered : " + number + " which is ODD!")
// }


// ---------------------------------------------- QUESTION : 10 ------------------------------------

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.

// const temp = prompt("Enter the Temperature to check the weather Condition")

// if(+temp > 40)
// {
    //     document.write("It is too hot outside")
    // }
    // else if(+temp > 30)
    // {
        //     document.write("The Weather today is Normal")
        // }
        // else if(+temp > 20)
        // {
            //     document.write("Today’s Weather is cool.")
            // }
            // else if(+temp > 10)
            // {
                //     document.write("OMG! Today’s weather is so Cool")
// }

// ---------------------------------------------- QUESTION : 11 ------------------------------------

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// const firstNumber = prompt("Enter the First Number")
// const secNumber = prompt("Enter the Second Number")
// const operator = prompt("Enter the operator you want to apply")

// function calculate(firstNum,secNumber,operator){

// }
// if(operator === "+")
// {
//     const add = +firstNumber + +secNumber
//     document.write("The Addition of " + firstNumber + " and " + secNumber + " is : " + add)
// }
// else if(operator === "-"){
    
//     const sub = +firstNumber - +secNumber
//     document.write("The Subtraction of " + firstNumber + " and " + secNumber + " is : " + sub)
// }
// else if(operator === "*"){
    
//     const Mul = +firstNumber * +secNumber
//     document.write("The Multiplication of " + firstNumber + " and " + secNumber + " is : " + Mul)
// }
// else if(operator === "/"){
    
//     const Divide = firstNumber / secNumber
//     document.write("The Division of " + firstNumber + " and " + secNumber + " is : " + Divide)
// }
// else if(operator === "%"){
    
//     const Mod = firstNumber % secNumber
//     document.write("The Modulus of " + firstNumber + " and " + secNumber + " is : " + Mod)
// }
// else{
//     document.write("Invalid Input please try again")
// }