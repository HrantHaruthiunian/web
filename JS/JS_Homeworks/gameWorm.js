
function Worm() {
   this.leftOffset = 10;
   this.topOffset = 175;
   this.step = 5;
   this.temp = 100;
   this.moveDirection = "";
   this.moveIntervalId = "";
   this.bustCount = 0;
   this.gamer = prompt("Ինչ է քո անունը ?", "");

   this.presentParameters = function () {
      document.getElementById("p2").innerHTML = `,  <b>Գլխավոր ճիճու՝</b> ${this.gamer}`;
      document.getElementById("p3").innerHTML = `,  <b>Ճիճուի արագությունը՝</b> ${Math.round((1000 / this.temp), 0)}`;
      document.getElementById("p4").innerHTML = `,  <b>Արագության մակարդակը՝</b> ${this.bustCount}`;
   };

   this.resetWormCoordinates = function () {
      $("#worm").offset({
         left: this.leftOffset,
         top: this.topOffset
      });
   };

   this.pushUp = function () {
      this.topOffset -= this.step;

   };
   this.pushDown = function () {
      this.topOffset += this.step;

   };
   this.pushLeft = function () {
      this.leftOffset -= this.step;

   };
   this.pushRight = function () {
      this.leftOffset += this.step;

   };

   this.move = function () {
      clearInterval(this.moveIntervalId);
      this.moveIntervalId = setInterval(this.moveDirection, this.temp);
   };

   this.stopMoving = function () {
      clearInterval(this.moveIntervalId);
   };
   this.movingUp = function () {
      this.moveDirection = this.pushUp;
      this.move();
   };

   this.movingDown = function () {
      this.moveDirection = this.pushDown;
      this.move();
   };

   this.movingLeft = function () {
      this.moveDirection = this.pushLeft;
      this.move();
   };

   this.movingRight = function () {
      this.moveDirection = this.pushRight;
      this.move();
   };

   this.accelerate = function () {
      this.bustCount++;
      if (this.temp > 5) {
         this.temp -= this.step;
         this.presentParameters();
         this.move();

      } else if (this.temp <= 5) {
         clearInterval(this.moveIntervalId);
         alert(`Ապրես ${this.gamer}, դու հաղթեցիր: Գնա միրգ կեր:`);
         this.temp = 100;
         this.presentParameters();
         this.move();

      }
   };

   this.decelerate = function () {
      this.bustCount--;
      if (this.temp <= 500) {
         this.temp += this.step;
         this.move();
         this.presentParameters();
      } else if (this.temp > 500) {
         clearInterval(this.moveIntervalId);
         alert("Անչափ դանդաղ է: Պետք է արագացնեք: !!!");
         this.temp = 500;
         this.move();
         this.presentParameters();
      }
   };
}



let worm1 = new Worm();
worm1.presentParameters();
worm1.movingUp();
worm1.movingDown();
worm1.movingLeft();
worm1.movingRight();
worm1.move();
controlling(worm1);




function controlling(object) {

   $("#worm").click(object.accelerate);

   window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
         return; // Do nothing if the event was already processed
      }

      switch (event.key) {
         case "ArrowDown":
            object.movingDown();
            document.getElementById("worm").style.transform = "rotate(90deg)";
            break;
         case "ArrowUp":
            object.movingUp();
            document.getElementById("worm").style.transform = "rotate(-90deg)";
            break;
         case "ArrowLeft":
            object.movingLeft();
            document.getElementById("worm").style.transform = "rotate(-180deg)";
            break;
         case "ArrowRight":
            object.movingRight();
            document.getElementById("worm").style.transform = "rotate(0deg)";
            break;
         case "Enter":
            object.move();
            break;
         case "Escape":
            object.stopMoving();
            break;
         case " ":
            object.stopMoving();
            break;
         case "+":
            object.accelerate();
            break;
         case "-":
            object.decelerate();
            break;

         default:
            return;
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
   }, true);
}