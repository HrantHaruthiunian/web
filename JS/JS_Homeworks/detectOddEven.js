//Given a number. Print “odd” if the number is odd and “even” if it’s even. 

function detectOddEven() {
   let number = +prompt("Please enter some number");
   let numType = "";
   let thisFileName = "detectOddEven.js";
   let fileRefPresentation = "<i>For mor information please see the file <b>" + thisFileName + "</b></i>";

   return function () {
      if (number % 2 === 0) {
         numType = "even";
      }
      else {
         numType = "odd";
      }

      let result = "<h3>Your number is: " + number + " and it is " + numType + "</h3><hr>" + fileRefPresentation;
      return result;

   }

}