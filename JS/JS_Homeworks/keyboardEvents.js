function keyboardEvents() {

   let canvas = document.getElementById("Keyboard");
   let ctxElement = canvas.getContext("2d");
   let width = canvas.width;
   let height = canvas.height;
   let frameRate = 100;

   let Ball = function () {

      this.x = width / 2;
      this.y = height / 2;
      this.radius = 10;
      this.step = 1;
      this.xSpeed = this.step;
      this.ySpeed = 0;

      this.drawCircle = function (fillCircle) {
         ctxElement.beginPath();
         ctxElement.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         if (fillCircle) {
            ctxElement.fill();
         } else {
            ctxElement.stroke();
         }
      }

      this.setDirection = function (direction) {
         switch (direction) {
            case "ArrowLeft":
               this.xSpeed = -this.step;
               this.ySpeed = 0;
               break;
            case "ArrowUp":
               this.xSpeed = 0;
               this.ySpeed = -this.step;
               break;
            case "ArrowRight":
               this.xSpeed = this.step;
               this.ySpeed = 0;
               break;
            case "ArrowDown":
               this.xSpeed = 0;
               this.ySpeed = this.step;
               break;
            case " ":
               this.xSpeed = 0;
               this.ySpeed = 0;
               break;
            default:
               return;
         }

      }

      this.changeBallSize = function (pushedKey) {
         switch (pushedKey) {
            case "c":
               if (this.radius > 2) {
                  this.radius--;
               } else { this.radius = 2 }
               break;
            case "v":
               if (this.radius < 100) {
                  this.radius++;
               } else { this.radius = 100 }
               break;
            default:
               return;
         }
      }

      this.move = function () {

         this.x += this.xSpeed;
         this.y += this.ySpeed;

         if (this.x < this.radius) {
            this.xSpeed = +this.step;
         } else if (this.x > width - this.radius) {
            this.xSpeed = -this.step;
         }
         if (this.y < this.radius) {
            this.ySpeed = +this.step;
         } else if (this.y > height - this.radius) {
            this.ySpeed = -this.step;
         }
      }

      this.setStepLevel = function (speedLevelNumber) {

         switch (speedLevelNumber) {
            case "1":
               this.step = 1;
               break;
            case "2":
               this.step = 2;
               break;
            case "3":
               this.step = 3;
               break;
            case "4":
               this.step = 4;
               break;
            case "5":
               this.step = 5;
               break;
            case "6":
               this.step = 6;
               break;
            case "7":
               this.step = 7;
               break;
            case "8":
               this.step = 8;
               break;
            case "9":
               this.step = 9;
               break;
            default:
               return;
         }
      }

      this.changeScore = function (pushedKey) {
         switch (pushedKey) {
            case "z":
               if (this.step > 1) {
                  this.step--;
               } else { this.step = 1 }
               break;
            case "x":

               if (this.step < 10) {
                  this.step++;
               } else { this.step = 10 }
               break;
            default:
               return;
         }
      }

   };

   var myBall = new Ball();

   function ballMoving() {
      ctxElement.clearRect(0, 0, width, height);
      myBall.drawCircle(true);
      myBall.move();
      ctxElement.strokeRect(0, 0, width, height);
   }

   $("body").keydown(function (event) {
      myBall.changeBallSize(event.key);
      myBall.setDirection(event.key);
      myBall.setStepLevel(event.key);
      myBall.changeScore(event.key);
   });

   let interval = setInterval(ballMoving, frameRate / 10);

}