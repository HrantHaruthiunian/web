// Write a function to print X star pattern series using loop.


function printX() {


   let thisFileName = "printX.js";
   let fileRefPresentation = `<i>For mor information please see the file <b>${thisFileName}</b></i>`;
   let icon = "*";
   let iconMatrix = " ";
   let matrixDim = +prompt("Please enter the matrix dimantion");

   return function () {


      for (let i = 0; i <= matrixDim; i++) {
         for (let j = 0; j <= matrixDim; j++) {

            if (i === j || j===matrixDim-i) {

               iconMatrix += icon;
            }
            else {
               iconMatrix += "-";
            }
         }
         iconMatrix += "<br>";
      }



      let result = `<h3> ${iconMatrix} </h3><hr> ${fileRefPresentation}`;
      return result;

   }

}


