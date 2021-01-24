function drawLines() {
   var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
   //var points = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];
   return function () {
      let elem = document.getElementById("canvasLinesID");
      let elem2d = elem.getContext("2d");
      elem2d.lineWidth = 2;
      elem2d.strokeStyle = "black";
      elem2d.fillStyle = "blue";


      elem2d.beginPath();
      elem2d.moveTo(0, 0);
      for (let i = 0; i < points.length; i++) {
         elem2d.lineTo(points[i][0], points[i][1]);
      }
      elem2d.stroke();
   }
}

function drawByMouse() {
   let elem = document.getElementById("canvasLinesID");
   let elem2d = elem.getContext("2d");
   elem2d.lineWidth = 2;
   elem2d.strokeStyle = "purple";

   var drawCircle = function () {
      elem2d.beginPath();
      elem2d.arc(leftOffset, topOffset, 2, 0, Math.PI * 2, false);
      elem2d.stroke();
   }

   var leftOffset = 0;
   var topOffset = 0;
   $("#canvasLinesID").on(
      {
         //mousedown: function (event) {
         //   leftOffset = event.pageX - 492; // -492 is the shifting to 2nd canvas on page
         //    topOffset = event.pageY - 80; // -80 is the shifting to 2nd canvas on page
         //     drawCircle();
         //   },

         //  mouseup: function (event) {
         //    leftOffset = event.pageX - 492; // -492 is the shifting to 2nd canvas on page
         //      topOffset = event.pageY - 80; // -80 is the shifting to 2nd canvas on page
         //     drawCircle();
         //   }
         mousemove: function (event) {
            leftOffset = event.pageX - 492; // -492 is the shifting to 2nd canvas on page
            topOffset = event.pageY - 80; // -80 is the shifting to 2nd canvas on page
            drawCircle();
         }



      });
}