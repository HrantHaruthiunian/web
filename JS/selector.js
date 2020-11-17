function selectorTopic() {
   let topic = document.getElementById("selectTopic").selectedIndex;
   let topicValue = document.getElementsByTagName("option")[topic].value;

   document.getElementById("homework").innerHTML = getHomework(topicValue);

   function getHomework(topicValue) {

      switch (topicValue) {
         case "average":
            return getAverage()();
            break;
         case "median":
            return getMedian()();
            break;
         case "duplicates":
            return getStrDuplicates()();
            break;
         case "prime":
            return detectPrime()();
            break;
         case "sumMatrix":
            return sumMatrix()();
            break;
         case "sumRecursive":
            return sumRecursive()();
            break;
         case "oddEven":
            return detectOddEven()();
            break;
         default:
            return "We don't have this homework";
      }

   }

}









