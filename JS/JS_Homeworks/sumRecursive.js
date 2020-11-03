function sumRecursive() {

   let number = 5;
   let sum = 0;

   function recursion(number) {
      sum = sum + number;
      if (number == 0) { return sum }
      return recursion(number - 1);
   }

   let sumRec = recursion(number);

   return function () {
      let result = "<h3>The number is: " + number + "<br>and the sum of number's elements is: " + sumRec + "</h3><hr>" + '<i>For mor information please see the file <b>"sumRecursive.js"</b></i>';
      return result;
   }

}

