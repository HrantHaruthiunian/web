

let leftOffset = 0;
let topOffset = 0;
let counterOfClics = 0;
let randomCoordinates = getRandomCoordinates();
let distance = 0;
let distanceHint = "";

$("#map").click(function (event) {
   leftOffset = event.pageX;
   topOffset = event.pageY;
   distance = Math.floor(getDistance());
   distanceHint = getDistanceHint();
   counterOfClics++;
   if (counterOfClics >= 20) {
      alert("GAME OVER");
      window.location.reload()
   }


   document.getElementById("response").innerHTML = `<div class="report">Սեղմումների քանակ՝ ${counterOfClics}, մնացել է սեղմել՝ ${20 - counterOfClics}, սեղմման մոտարկում՝ ${Math.round(randomCoordinates[0] * 100 / leftOffset)}, ${Math.round(randomCoordinates[1] * 100 / topOffset)}</div >`;
   document.getElementById("hint").innerHTML = `<div id="hint" class="hint">Հեռավորությունը՝ ${distance} մետր է, ${distanceHint}</div>`;
});

function getRandomCoordinates() {
   let x = Math.floor(560 + (Math.random() * 580));
   let y = Math.floor(275 + (Math.random() * 485));
   let randomCoordinates = [x, y];
   return randomCoordinates;
}

function getDistance() {
   let difX = leftOffset - randomCoordinates[0];
   let difY = topOffset - randomCoordinates[1];
   let distance = Math.sqrt(difX ** 2 + difY ** 2);
   return distance;
}

function getDistanceHint() {
   if (distance < 10) {
      playAudio();
      return "Գտար գանձը :) !";
   } else if (distance < 20) {
      return "Գրեթե հասնում ես";
   } else if (distance < 40) {
      return "Շատ ես մոտեցել";
   } else if (distance < 80) {
      return "Մոտենում ես";
   } else if (distance < 160) {
      return "Այնքան էլ հեռու չէ";
   } else if (distance < 320) {
      return "Հեռու է";
   } else {
      return "Շատ հեռու է!";
   }
};

function playAudio() {
   new Audio("Files\sound.mp3").play();
}