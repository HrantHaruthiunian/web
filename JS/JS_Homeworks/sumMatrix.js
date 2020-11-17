function sumMatrix() {

   let matrix = [
      [1, 2, 1],
      [3, 2, 2],
      [0, 2, 1]
   ];
   let thisFileName = "sumMatrix.js";
   let fileRefPresentation = "<i>For mor information please see the file <b>" + thisFileName + "</b></i>";

   return function () {

      let sumOfElements = 0;

      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
            sumOfElements += matrix[i][j];
         }
      }

      let result = "<h3>The elements of the matrix are: " + matrix + "<br>and the sum of elements is: " + sumOfElements + "</h3><hr>" + fileRefPresentation;

      return result;

   }

}