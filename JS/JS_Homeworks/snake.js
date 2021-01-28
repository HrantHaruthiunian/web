function gameSnake() {

   let canvas = document.getElementById("snake");
   let ctxElement = canvas.getContext("2d");

   let width = canvas.width;
   let height = canvas.height;

   let blockSize = 10;
   let widthInBlocks = width / blockSize;
   let heightInBlocks = height / blockSize;

   let score = 0;
   let speed = 250;

   let gamer = "test"; //prompt("Ինչ է քո անունը ?");

   let food = ['գաթա', 'բանան', 'նուռ', 'խնձոր', 'ելակով տորթ', 'սերկևիլ', 'մի բան', 'ինչ ուզում ես', 'քո սիրած բանը', 'ու ոչ մի բան մի', 'ջուր խմի ու մի', 'ճաշ', 'խորոված', 'մսով փլավ', 'ծամոն'];

   let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"];
   let randomColor = [];

   let randomFood = getRandomItem(food);

   function getRandomItem(arrayOfItems) {
      return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
   };

   let directions = {
      37: "left",
      38: "up",
      39: "right",
      40: "down"
   };

   function drawBlock() {
      ctxElement.fillStyle = "Gray";
      ctxElement.fillRect(0, 0, width, blockSize);
      ctxElement.fillRect(0, height - blockSize, width, blockSize);
      ctxElement.fillRect(0, 0, blockSize, height);
      ctxElement.fillRect(width - blockSize, 0, blockSize, height);
   }

   function drawScore() {
      ctxElement.font = "18px Courier";
      ctxElement.fillStyle = "black";
      ctxElement.textAlign = "left";
      ctxElement.textBaseLine = "top";
      ctxElement.fillText("Հաշիվը: " + score + ", Արագությունը: " + speed, 10, 23);
   }

   function gameOver() {
      clearInterval(intervalId);
      ctxElement.font = "24px Courier";
      ctxElement.fillStyle = "black";
      ctxElement.textAlign = "center";
      ctxElement.textBaseLine = "middle";
      ctxElement.fillText(gamer + " ջան, խաղն ավարտվեց:", width / 2, height / 2);
      ctxElement.fillText("Գնա " + randomFood + " կեր:", width / 2, height / 2 + 30);
   }

   function circle(x, y, raduis, filled) {
      ctxElement.beginPath();

      ctxElement.arc(x, y, raduis, 0, Math.PI * 2, false);
      if (filled) {
         ctxElement.fill();
      } else {
         ctxElement.stroke();
      }

   }

   function Block(col, row) {
      this.col = col;
      this.row = row;

      this.drawSquare = function (color) {
         let x = this.col * blockSize;
         let y = this.row * blockSize;
         ctxElement.fillStyle = color;
         ctxElement.fillRect(x, y, blockSize, blockSize);
      }
      this.drawCircle = function (color) {
         let centerX = this.col * blockSize + blockSize / 2;
         let centerY = this.row * blockSize + blockSize / 2;
         ctxElement.fillStyle = color;
         circle(centerX, centerY, blockSize / 2, true);
      }
      this.equal = function (otherBlock) {
         return this.col === otherBlock.col && this.row === otherBlock.row;
      };


   }

   function Snake() {
      this.segments = [
         new Block(7, 5),
         new Block(6, 5),
         new Block(5, 5)
      ];

      this.direction = "right";

      this.draw = function () {

         for (let i = 0; i < this.segments.length; i++) {
            if (i == 0) {
               this.segments[i].drawSquare("Black");
            } else if (i >= this.segments.length - 2) {
               this.segments[i].drawSquare("Gray");
            } else {
               this.segments[i].drawSquare(randomColor[randomColor.length - i - 1]);
            }
         }

      }

      this.move = function () {
         let head = this.segments[0];
         let newHead;

         if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
         } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
         } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
         } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
         }

         if (this.checkCollision(newHead)) {
            gameOver();
            return;
         }

         this.segments.unshift(newHead);

         if (newHead.equal(apple.position)) {
            score++;
            randomColor[score] = getRandomItem(colors);
            apple.move();
         } else {
            this.segments.pop();
         }
      }

      this.checkCollision = function (head) {
         let leftCollision = (head.col === 0);
         let topCollision = (head.row === 0);
         let rightCollision = (head.col === widthInBlocks - 1);
         let bottomCollision = (head.row === heightInBlocks - 1);
         let wallCollision = (leftCollision || topCollision || rightCollision || bottomCollision);

         let selfCollision = false;

         for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
               selfCollision = true;
            }
         }

         return wallCollision || selfCollision;

      }

      this.setDirection = function (newDirection) {

         let contrDirection = (
            (this.direction === "right" && newDirection === "left") ||
            (this.direction === "left" && newDirection === "right") ||
            (this.direction === "up" && newDirection === "down") ||
            (this.direction === "down" && newDirection === "up"));

         if (contrDirection) {
            return;
         }
         this.direction = newDirection;
      }
   }

   function Apple() {
      this.position = new Block(10, 10);

      this.draw = function () {
         if (score == 0) {
            randomColor[0] = "Green";
            this.position.drawCircle(randomColor[0]);
         }
         this.position.drawCircle(randomColor[score]);
      }

      this.move = function () {
         let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
         let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
         this.position = new Block(randomCol, randomRow);
      }
   }

   $("body").keydown(function (event) {
      let newDirection = directions[event.keyCode];
      if (newDirection !== undefined) {
         snake.setDirection(newDirection);
      }
   });

   let apple = new Apple();
   let snake = new Snake();

   let intervalId = setInterval(function () {
      ctxElement.clearRect(0, 0, width, height);
      drawBlock();
      drawScore();
      apple.draw();
      snake.move();
      snake.draw();
   }, speed);
}