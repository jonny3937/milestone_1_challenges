// Challenge 1: Sum of two numbers
function add(num1, num2){
    return num1 + num2
}
let sum = add(4, 7);
console.log('The sum of two numbers is : ');
console.log (sum);
let sum2 = add(10, 20);
console.log('The sum of two numbers is : ');
console.log (sum2);
// end of sum of two numbers.


// challenge 2:  Convert Minutes into Seconds
function convert(minutes){
    return minutes * 60;
}
let minutes = 34;
let seconds = convert(minutes);
console.log('The number of seconds in 34 minutes is: ');
console.log (seconds);
let minutes2 = 2;
let seconds2 = convert(minutes2);
console.log('The number of seconds in 2 minutes is: ');
console.log (seconds2);
// end of converting minutes into seconds

// challenge 3 : Perimeter of a Rectangle
function findperimeter(length, width){
    return 2 * (length + width);
}
let length = 6;
let width = 7;
let perimeter = findperimeter(length, width);
console.log('The perimeter of the rectangle is: ');
console.log (perimeter);
let length2 = 10;
let width2 = 20;
let perimeter2 = findperimeter(length2, width2);
console.log('The perimeter of the rectangle is: ');
console.log (perimeter2);
// end of perimeter of a rectangle challenge


// challenge 4: Check whether a number is Negative
function isNegative(num){
    return num < 0;
}
let num = -5;
let result = isNegative(num);
console.log('Is the number negative? : ');
console.log (result); // true
let num2 = 5;
let result2 = isNegative(num2);
console.log('Is the number negative? : ');
console.log (result2); // false
// end of challenge 4

// challenge 5: Can I Drive
function canDrive(name, age) {
    if (age >= 18) {
        console.log(name + " is old enough to drive");
    } else {
        console.log(name + " is not old enough to drive yet");
    }
}
canDrive("Jane", 22);
canDrive("June", 12);


// end of challenge 5

// challenge 6:  Check the largest number
function findLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
let largest = findLargestNumber(5, 9, 3);
console.log('The largest number is: ');
console.log (largest);
let largest2 = findLargestNumber(1, 19, 0);
console.log('The largest number is: ');
console.log (largest2);
// end of challenge 6

// challenge 7:  bml calculate category

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    return `Your BMI is ${bmi.toFixed(2)} ${category}.`;
}
console.log(calculateBMI(85, 1.8));  //Your BMI is 26.23 Overweight.
console.log(calculateBMI(70, 1.75)); //Your BMI is 22.86 Normal weight.
console.log(calculateBMI(50, 1));    //Your BMI is 50.00 Obese.
// end of challenge 7


// start of challenge 8:  Greet the user based on the time of day
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour <= 17) {
        return `Good afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 21) {
        return `Good evening, ${name}!`;
    } else {
        return `Good night, ${name}!`;
    }
}
console.log(greetUser("maish", 10)); 
console.log(greetUser("maish", 14)); 
console.log(greetUser("maish", 19)); 
console.log(greetUser("maish", 23));
// end of challenge 8 

// challenge 9:  . FizzBuzz if a number is divisible b 3,5 ,both or not divisible
function fizzBuzzCheck(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number.toString();
    }
}
console.log(fizzBuzzCheck(30)); 
console.log(fizzBuzzCheck(3));  
console.log(fizzBuzzCheck(5)); 
console.log(fizzBuzzCheck(1));  
// end of challenge 9

// challenge 10: Perimeter of a shape;
// here am to give value to shapes first;
function calcperimeter(shape, num) {
    if (shape === "s") {
        return 4 * num;
    } else if (shape === "c") {
        return 6.28 * num;
    } else {
        return " Invalid shape";
    }
}
console.log(calcperimeter("s", 8)); //32
console.log(calcperimeter("c", 3)); //18.84 
//( node milestone_1_challenges.js    ) //for my purpose of running my code 
