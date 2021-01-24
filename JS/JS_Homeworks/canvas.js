function drawCanvas() {

   let element = document.getElementById("canvasID");
   let elementContext2d = element.getContext("2d");

   elementContext2d.lineWidth = 8;
   elementContext2d.fillStyle = "chocolate";
   elementContext2d.strokeStyle = "chocolate";
   elementContext2d.strokeRect(0, 0, 480, 480);


   for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 4; i++) {

         elementContext2d.fillRect(i * 120, j * 120, 60, 60);
         elementContext2d.fillRect(i * 120 + 60, j * 120 + 60, 60, 60);

      }
   }

   function drawX() {
      elementContext2d.strokeStyle = "Turquoise";
      elementContext2d.lineWidth = 10;

      elementContext2d.beginPath();
      elementContext2d.moveTo(0, 0);
      elementContext2d.lineTo(120, 120);
      elementContext2d.moveTo(120, 0);
      elementContext2d.lineTo(0, 120);
      elementContext2d.stroke();
   }
   drawX();

   function drawTriangleFilled() {
      elementContext2d.fillStyle = "Blue";

      elementContext2d.beginPath();
      elementContext2d.moveTo(180, 0);
      elementContext2d.lineTo(240, 120);
      elementContext2d.lineTo(120, 180);
      elementContext2d.lineTo(180, 0);
      elementContext2d.fill();
   }
   drawTriangleFilled();


   function drawTriangleEmpty() {
      elementContext2d.strokeStyle = "black";
      elementContext2d.lineWidth = 4;

      elementContext2d.beginPath();
      elementContext2d.moveTo(180, 0);
      elementContext2d.lineTo(240, 120);
      elementContext2d.lineTo(120, 180);
      elementContext2d.lineTo(180, 0);

      elementContext2d.stroke();
   }
   drawTriangleEmpty();

   function drowArc() {
      elementContext2d.strokeStyle = "black";
      elementContext2d.lineWidth = 4;

      elementContext2d.beginPath();
      elementContext2d.arc(300, 60, 50, 0, Math.PI * 3 / 2, false);

      elementContext2d.stroke();
   }

   drowArc();

   function drowFilledCircle() {
      elementContext2d.fillStyle = "purple";

      elementContext2d.beginPath();
      elementContext2d.arc(420, 60, 50, 0, Math.PI * 2, false);

      elementContext2d.fill();

   }

   drowFilledCircle();


}