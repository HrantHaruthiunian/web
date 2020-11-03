function getMedian() {

   let intElements = [2, 1, 3, -1, -10];

   return function () {
      // array sorting
      let element;
      for (let i = 0; i < intElements.length; i++) {
         for (let j = 0; j < intElements.length; j++) {
            if (intElements[j] > intElements[j + 1]) {
               element = intElements[j];
               intElements[j] = intElements[j + 1];
               intElements[j + 1] = element;
            }
         }
      }
      // finding the median
      let median;
      let midElementIndex = (intElements.length) / 2;
      if (midElementIndex % 2 == 0) {
         median = (intElements[midElementIndex - 1] + intElements[midElementIndex]) / 2;
      }
      else {
         median = intElements[Math.floor(midElementIndex)];
      }
      let result = "<h3>The median of elements [" + intElements + "] is " + median + "</h3><hr>" + '<i>For mor information please see the file <b>"getMedian.js"</b></i>';
      return result;
   }

}