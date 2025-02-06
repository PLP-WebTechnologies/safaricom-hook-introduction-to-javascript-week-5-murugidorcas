

// 1. Declare variables of different types and print their values and types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "coding", "gaming"]; // array
let user = { name: "Jane", age: 30, isStudent: false }; // object

console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("User: " + JSON.stringify(user) + " (Type: " + typeof user + ")");

// 2. Simple Calculator
function calculator() {
  let firstNum = parseFloat(prompt("Enter the first number:"));
  let secondNum = parseFloat(prompt("Enter the second number:"));
  let operator = prompt("Choose an operation (+, -, *, /):");

  let result;

  if (operator === "+") {
    result = firstNum + secondNum;
  } else if (operator === "-") {
    result = firstNum - secondNum;
  } else if (operator === "*") {
    result = firstNum * secondNum;
  } else if (operator === "/") {
    if (secondNum !== 0) {
      result = firstNum / secondNum;
    } else {
      result = "Cannot divide by zero!";
    }
  } else {
    result = "Invalid operation!";
  }

  alert("Result: " + result);
}

calculator();

// 3. Greet user function
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript world!`;
}

// Example usage: Displaying the greeting in an HTML element
let greetingMessage = greetUser("John");
document.getElementById("dynamic-content").innerHTML = "<p>" + greetingMessage + "</p>";

// Part 2: JavaScript Control Structures

// 1. If Statement (Voting eligibility)
let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
  alert("You are eligible to vote!");
} else {
  alert("You are not eligible to vote.");
}

// 2. Loop to display numbers from 1 to 10 on the webpage
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  ol.appendChild(li);
}
document.getElementById("dynamic-content").appendChild(ol);

// Part 3: DOM Manipulation

// 1. Change the text of the <h1> element
document.querySelector("h1").textContent = "JavaScript in Action!";

// 2. Add new <p> inside the dynamic-content div
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
