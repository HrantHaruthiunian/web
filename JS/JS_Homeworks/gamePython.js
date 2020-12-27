let leftOffset = 10;
let topOffset = 175;
let step = 5;
let temp = 100;
let moveDirection = "";
let moveIntervalId = "";
let bustCount = 0;
let gamer = "";


function setPythonName() {
   gamer = prompt("Ինչ է քո անունը ?");
   viewPython();
}


function viewPython() {

   document.getElementById("p2").innerHTML = `,  <b>Գլխավոր ճիճու՝</b> ${gamer}`;
   document.getElementById("p3").innerHTML = `,  <b>Ճիճուի արագությունը՝</b> ${Math.round((1000 / temp), 0)}`;
   document.getElementById("p4").innerHTML = `,  <b>Արագության մակարդակը՝</b> ${bustCount}`;
}

function resetPythonCoordinates() {
   $("#python").offset({
      left: leftOffset,
      top: topOffset
   });
}

function moveUp() {
   topOffset -= step;
   resetPythonCoordinates();
}

function moveDown() {
   topOffset += step;
   resetPythonCoordinates();
}

function moveLeft() {
   leftOffset -= step;
   resetPythonCoordinates();
}

function moveRight() {
   leftOffset += step;
   resetPythonCoordinates();
}

function move() {
   clearInterval(moveIntervalId);
   moveIntervalId = setInterval(moveDirection, temp);
}

function stopMoving() {
   clearInterval(moveIntervalId);
}

function pushUp() {
   moveDirection = moveUp;
   move();
}

function pushDown() {
   moveDirection = moveDown;
   move();
}

function pushLeft() {
   moveDirection = moveLeft;
   move();
}

function pushRight() {
   moveDirection = moveRight;
   move();
}


function accelerate() {
   bustCount++;
   if (temp > 5) {
      temp -= step;
      move();
      viewPython();
   } else if (temp <= 5) {
      clearInterval(moveIntervalId);
      alert(`Ապրես ${gamer}, դու հաղթեցիր: Գնա ${null} կեր:`);
      temp = 100;
      move();
      viewPython();
   }
}

function decelerate() {
   bustCount--;
   if (temp <= 500) {
      temp += step;
      move();
      viewPython();
   } else if (temp > 500) {
      clearInterval(moveIntervalId);
      alert("Անչափ դանդաղ է: Պետք է արագացնեք: !!!");
      temp = 500;
      move();
      viewPython();
   }
}

$("#python").click(accelerate);




window.addEventListener("keydown", function (event) {
   if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
   }

   switch (event.key) {
      case "ArrowDown":
         pushDown();
         document.getElementById("python").style.transform = "rotate(90deg)";
         break;
      case "ArrowUp":
         pushUp();
         document.getElementById("python").style.transform = "rotate(-90deg)";
         break;
      case "ArrowLeft":
         pushLeft();
         document.getElementById("python").style.transform = "rotate(-180deg)";
         break;
      case "ArrowRight":
         pushRight();
         document.getElementById("python").style.transform = "rotate(0deg)";
         break;
      case "Enter":
         move();
         break;
      case "Escape":
         stopMoving();
         break;
      case " ":
         stopMoving();
         break;
      case "+":
         accelerate();
         break;
      case "-":
         decelerate();
         break;

      default:
         return;
   }

   // Cancel the default action to avoid it being handled twice
   event.preventDefault();
}, true);