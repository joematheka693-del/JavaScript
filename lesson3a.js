// Javascript For Loop
// Loops are used to iterate through something (Repeat something a number of times)
// Structure of the loop
//1. for keyword followed by parenthesis
//2. initialization; set the condition; increment/decrement
//3. Body of the for loop

for(let i = 0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}

console.log("=============================")

for(let i = 0; i <= 10; i++){
    if (i == 6) {
        console.log("This is number: ", i)
    }
    else{
        console.log("The new value of i is: ", i)
    }    
}

//Create a for loop that is able to print out all the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

console.log("===================================")
//pdf page 28

// Write a for loop to print all odd numbers from 1 to 19.
for (let number = 1; number <= 19; number += 2) {
    console.log(number);
}

for (let number = 1; number <= 19; number++) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}

console.log("===================================")
// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let number = 10; number >= 1; number--) {
    console.log(number);
}

// Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
