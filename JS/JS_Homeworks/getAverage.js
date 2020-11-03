function getAverage() {

   let intElements = [2, 1, 3, -1, -10];

   return function () {
      let sumOfElements = 0;
      for (let i = 0; i <intElements.length; i++) {
         sumOfElements = sumOfElements + intElements[i];
      }
      let result = "<h3>The average of elements [" + intElements + "] is " + sumOfElements / (intElements.length) + "</h3><hr>" + '<i>For mor information please see the file <b>"getAverage.js"</b></i>';
      return (result);
   }
}