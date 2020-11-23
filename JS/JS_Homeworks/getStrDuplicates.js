// print all the duplicates and their counts in the input string
function getStrDuplicates() {

   let someStr = "aasdddfksfd";
   let thisFileName = "getStrDuplicates.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;

   return function () {
      let strCopy = [];
      let countElements = [];
      for (i = 0; i < someStr.length; i++) {
         strCopy.push(someStr.charAt(i));
         countElements.push(1);
      }
      let strDuplicates = [];
      let countOfDuplicates = [];
      for (let i = 0; i < strCopy.length; i++) {
         for (let j = 0; j < strCopy.length; j++) {
            if (i != j && strCopy[i] === strCopy[j] && typeof strCopy[i] !== "undefined") {
               countElements[i]++;
               delete strCopy[j];
            }
         }
         if (countElements[i] >= 2 && typeof strCopy[i] !== "undefined") {
            strDuplicates.push(strCopy[i]);
            countOfDuplicates.push(countElements[i]);
         }
      }

      let sumUpDuplicates = "";
      for (let i = 0; i < strDuplicates.length; i++) {
         sumUpDuplicates += " (" + strDuplicates[i] + ":" + countOfDuplicates[i] + "-units) ";
      }

      let result = `<h4>The initial string is: "${someStr}". <br>Here is the sumUp of the duplicates:<br> ${sumUpDuplicates} </h4><hr> ${fileRefPresentation}`;

      return result;

   }
}
