
function ballAnimation() {

   let canvasElement = document.getElementById("ball");
   let ctxElement = canvasElement.getContext("2d");

   let width = canvasElement.width;
   let height = canvasElement.height;
   let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"];
   let colorsCount = [0, 0, 0, 0, 0, 0, 0];
   let ballRadius = 10;
   let ballsQuantity = 150;

   function Ball() {
      this.x = width / 2;
      this.y = height / 2;
      this.xSpeed = Math.random() * 4 - 2;
      this.ySpeed = Math.random() * 4 - 2;
      let colorRandomIndex = Math.floor(Math.random() * colors.length);
      this.color = colors[colorRandomIndex];
      colorsCount[colorRandomIndex] += 1;

      this.drawBall = function () {
         ctxElement.beginPath();
         ctxElement.fillStyle = this.color;
         ctxElement.arc(this.x, this.y, ballRadius, 0, Math.PI * 2);
         ctxElement.fill();
      }

      this.ballMove = function () {
         this.x += this.xSpeed;
         this.y += this.ySpeed;
      }

      this.checkCollision = function () {
         if (this.x < 3 || this.x > width - 3) {
            this.xSpeed = -this.xSpeed;
         }
         if (this.y < 3 || this.y > height - 3) {
            this.ySpeed = -this.ySpeed;
         }

      }

   }


   let balls = [];


   for (let i = 0; i < ballsQuantity; i++) {
      balls[i] = new Ball();
   }

   let info = function () {
      let report = "";
      for (let i = 0; i < colors.length; i++) {
         report += colors[i] + ":" + colorsCount[i] + " ";
      }
      return report;
   }
   document.getElementById("info").innerHTML = info();


   function ballsMoving() {
      ctxElement.clearRect(0, 0, width, height);
      for (let i = 0; i < ballsQuantity; i++) {
         balls[i].drawBall();
         balls[i].ballMove();
         balls[i].checkCollision();
      }
      ctxElement.strokeRect(0, 0, width, height);
   }


   setInterval(ballsMoving, 0);




}