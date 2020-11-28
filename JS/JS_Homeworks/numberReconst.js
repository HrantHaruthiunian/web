// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number.
// If the last digit of the inserted number is 0, number remains the same.

function numberReconst() {


   let thisFileName = "numberReconst.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;
   let numberInputed = prompt("Please enter the number");
   let numberReconst = 0;
   let lastDigit = numberInputed.slice(numberInputed.length - 1);
   let firstPartOfNumber = numberInputed.slice(0, numberInputed.length - 1);


   return function () {
      if (numberInputed.length > 1 && lastDigit != 0) {
         numberReconst = +(lastDigit + firstPartOfNumber);
      
      } else {
         numberReconst = numberInputed;
      }

      let result = `<h3>The inputed number is: ${numberInputed} <br>
      and the number after reconstitution is: ${numberReconst} </h3><hr> ${fileRefPresentation}`;

      return result;


   }

}




