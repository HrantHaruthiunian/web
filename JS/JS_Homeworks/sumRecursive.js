function sumRecursive() {

   let number = 6;
   let sum = 0;

   let sumRec = (function recursion(number) {
      sum = sum + number;
      if (number == 0) { return sum }
      return recursion(number - 1);
   })(number);

   return function () {
      let result = "<h3>The number is: " + number + "<br>and the sum of number's elements is: " + sumRec + "</h3><hr>" + '<i>For mor information please see the file <b>"sumRecursive.js"</b></i>';
      return result;
   }

}
