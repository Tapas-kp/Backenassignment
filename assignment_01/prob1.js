// Import the crypto module
const crypto = require("crypto");
// Get commands using process.argv
const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);
// Complete the function
function Calculator() {
  switch (operation) {
    case "add":
      console.log(num1 + num2);
      break;
    case "sub":
      console.log(num1 - num2);
      break;
    case "mult":
      console.log(num1 * num2);
      break;
    case "divide":
      console.log(num1 / num2);
      break;
    case "sin":
      console.log(Math.sin(num1));
      break;
    case "cos":
      console.log(Math.cos(num1));
      break;
    case "tan":
      console.log(Math.tan(num1));
      break;
    case "random":
      if (process.argv.length < 4) {
        console.log("Provide length for random number generation.");
      } else {
        const length = parseInt(process.argv[3]);
        const randomBytes = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
        console.log(randomBytes);
      }
      break;
    default:
      console.log("Invalid operation");
  }
}
Calculator();