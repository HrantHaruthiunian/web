// Write a function that returns an anonymous function, 
// which transforms its input by adding a particular suffix at the end.

function addSuffixLy() {


   let thisFileName = "addSuffixLy.js";
   let fileRefPresentation = "<i>For mor information please see the file <b>" + thisFileName + "</b></i>";

   let someWord = prompt("Please enter some word");

   return function () {
      let newWord = someWord + "ly";
      let result = "<h3>Your have inputed the word: '" + someWord + "' <br> So, the new word with the suffix 'ly' is: " + newWord + "</h3><hr>" + fileRefPresentation;
      return result;
   }


}

