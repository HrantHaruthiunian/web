function canvasAnimation() {

   let canvasElem = document.getElementById("canvasAnimationID");
   let drawingElement = canvasElem.getContext("2d");



   let positionX = 0;

   function movingFunction() {
      drawingElement.clearRect(0, 0, 480, 480);
      drawingElement.fillRect(positionX, 0, 20, 20);
      drawingElement.fillStyle = "chocolate";
      positionX++;
      if (positionX > 480) {
         positionX = 0;
      }
   }


   let moveRect = setInterval(movingFunction, 30);


   function drawBee(x, y) {

      function circle(x, y, radius, fillCircle) {
         drawingElement.beginPath();
         drawingElement.lineWidth = 2;
         drawingElement.strokeStile = "Black";
         drawingElement.fillStyle = "Gold"
         drawingElement.arc(x, y, radius, 0, Math.PI * 2, false);
         if (fillCircle) {
            drawingElement.fill();
         } else { drawingElement.stroke(); }
      }

      circle(x, y, 8, true);
      circle(x, y, 8, false);
      circle(x - 5, y - 11, 5, false);
      circle(x + 5, y - 11, 5, false);
      circle(x - 2, y - 1, 2, false);
      circle(x + 2, y - 1, 2, false);
   }

   function updateCoordinate(coordinate) {
      let randomNumber = Math.random() * 4 - 2;
      coordinate += (randomNumber) * 4;
      if (coordinate > 480) {
         coordinate = 480;
      }
      if (coordinate < 0) {
         coordinate = 0;
      }
      return coordinate;
   }

   let x = 240;
   let y = 240;

   function movingBee() {
      //drawingElement.clearRect(0, 0, 480, 480);

      drawBee(x, y);
      x = updateCoordinate(x);
      y = updateCoordinate(y);
      //drawingElement.strokeRect(0, 0, 480, 480);
   }



   let moveBee = setInterval(movingBee, 30);


}