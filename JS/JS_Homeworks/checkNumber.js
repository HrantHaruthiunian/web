// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function checkNumber() {

   let thisFileName = "checkNumber.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;

   let numberInputed = +prompt("Please enter the number");
   let variant = "the number is a multiple of: ";

   return function () {

      if (numberInputed % 3 === 0 && numberInputed % 5 === 0 && numberInputed % 7 === 0) {
         variant += "3,5 and 7";
      }
      else if (numberInputed % 3 === 0 && numberInputed % 5 === 0 && numberInputed % 7 !== 0) {
         variant += "3 and 5";
      }
      else if (numberInputed % 3 !== 0 && numberInputed % 5 === 0 && numberInputed % 7 === 0) {
         variant += "5 and 7";
      }
      else if (numberInputed % 3 === 0 && numberInputed % 5 !== 0 && numberInputed % 7 === 0) {
         variant += "3 and 7";
      }
      else if (numberInputed % 3 === 0 && numberInputed % 5 !== 0 && numberInputed % 7 !== 0) {
         variant += "3";
      }
      else if (numberInputed % 3 !== 0 && numberInputed % 5 === 0 && numberInputed % 7 !== 0) {
         variant += "5";
      }
      else if (numberInputed % 3 !== 0 && numberInputed % 5 !== 0 && numberInputed % 7 === 0) {
         variant += "7";
      }
      else {
         variant = "the number is multiple neither 3 nor 5 and nor 7"; 
      }

      let result = `<h3>The inputed number is: ${numberInputed} <br>and ${variant}  </h3><hr> ${fileRefPresentation}`;
      return result;
   }

}
