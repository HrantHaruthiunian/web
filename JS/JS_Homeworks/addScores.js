
let gamers = {
   A: 0,
   B: 0,
   C: 0
}

function addScores() {


   let thisFileName = "addScores.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;

   let winner = prompt("Please enter the name of winner (A, B or C) to add the relevant score:");


   return function () {
      if (winner != "A" && winner != "B" && winner != "C") {
         return "There are not gamer named: " + winner;
      }
      else {
         for (let gamerKey in gamers) {
            if (gamerKey == winner) {
               gamers[gamerKey] += 1;
               break;
            }
         }
         let result = `<h3>Your have inputed gamer: ${winner} <br> So, the updated scores are: ${JSON.stringify(gamers)} </h3><hr> ${fileRefPresentation}`;
         return result;
      }
   }

}