function selectorTopic() {
   let topic = document.getElementById("selectTopic").selectedIndex;
   let topicValue = document.getElementsByTagName("option")[topic].value;

   switch (topicValue) {
      case "average":
         document.getElementById("homework").innerHTML = getAverage()();
         break;
      case "median":
         document.getElementById("homework").innerHTML = getMedian()();
         break;
      case "duplicates":
         document.getElementById("homework").innerHTML = getStrDuplicates()();
         break;
      case "prime":
         document.getElementById("homework").innerHTML = detectPrime()();
         break;
      case "sumMatrix":
         document.getElementById("homework").innerHTML = sumMatrix()();
         break;
      case "sumRecursive":
         document.getElementById("homework").innerHTML = sumRecursive()();
         break;

      default:
         document.getElementById("homework").innerHTML = 'default';
   }

}









