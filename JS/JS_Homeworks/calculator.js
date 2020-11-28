// Create a function that takes two numbers and a mathematical operator + - / * 
// and will perform a calculation with the given numbers.
// Note: If the input tries to divide by 0, return: "Can't divide by 0!"

function calculator() {

   let thisFileName = "calculator.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;

   let firstNumber = +prompt("Please input the 1st number");
   let operator = prompt("Please input the operator ( +, -, / or * )");
   let secondNumber = +prompt("Please input the 2nd number");
   let answer = 0;

   return function () {

      if (secondNumber !== 0) {


         switch (operator) {
            case "+":
               answer = firstNumber + secondNumber;
               break;
            case "-":
               answer = firstNumber - secondNumber;
               break;
            case "*":
               answer = firstNumber * secondNumber;
               break;
            case "/":
               answer = firstNumber / secondNumber;
               break;
            default:
               answer = "This calculator dosn't work with this operator.";
         }


      } else {
         return "Can't divide by 0!";
      }


      let result = `<h3>You have inputed: ${firstNumber + operator + secondNumber}. 
      So the result is: ${answer} </h3><hr>  ${fileRefPresentation}`;
      return result;

   }


}