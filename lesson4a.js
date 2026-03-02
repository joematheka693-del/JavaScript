// Functions with parameters
// Parameters are values that get passed as arguments when we invoke a function .
// They help us to create functions that can be reusable through out a program.


function greeting(name){
    console.log("Hello", name, "How have you been?")
}

greeting("Joe Matheka")
greeting("Jason Statham")
greeting("Dwayne")

console.log("========================================")

// Below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the two numbers is: ", sum,"cm\u00B2")
}

addition(45, 60)
addition(90, 50)

console.log("========================================")
// Calculate the area of triangle whose base is 20cm and height 12cm by use of a function that accepts parameters
function area(base, height){
    product = (base * height) / 2
    console.log("The area of the triangle is: ", product)
}

area(20, 12)

console.log("========================================")
// Find the simple interest given the principal as 50000 rate as 5% and time as 8years
function simpleinterest(principal, rate, time){
    product = (principal * rate * time) / 100
    console.log("The simple interest is: ", product)
}

simpleinterest(50000, 5, 8)