
// Create a function that validates whether a number n is within the bounds of lower and upper. 
// Return false if n is not an integer.

function intWithinBounds() {
   let thisFileName = "checkBounds.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;

   let lowerNumber = +prompt("Please enter the lower number");
   let upperNumber = +prompt("Please enter the upper number");
   let givenNumber = +prompt("Please enter an integer for validation in a given interval");

   return function () {
      
      if (givenNumber > lowerNumber && givenNumber < upperNumber) {
        
         let result = `<h3>You have inputed the following interval: (${lowerNumber}, ${upperNumber}). As well as a number:   ${givenNumber}.<br> So, the given number is WITHIN the interval. </h3><hr> ${fileRefPresentation}`;
         return result;
      }
      else if (givenNumber <= lowerNumber || givenNumber >= upperNumber) {
         let result = `<h3>You have inputed the following interval: (${lowerNumber}, ${upperNumber}). As well as a number:   ${givenNumber}.<br> So, the given number is NOT WITHIN the interval. </h3><hr> ${fileRefPresentation}`;
         return result;
      }
      else {
         return "Your input is not an integer. Please, restart the function and reenter the number";
      }

   }

}

