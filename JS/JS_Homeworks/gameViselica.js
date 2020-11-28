function gameViselica() {


   let startGame = confirm("whould you like to start the game ?");


   if (startGame) {
      alert("The game 'Viselica' is started. You should find the city name by typing any letter");

      let cities = ["Yerevan", "Moscou", "Paris", "London", "Stepanakert", "Bern", "Washington", "Brazil", "Tbilisi", "Tokyo"];
      let randomCity = cities[Math.floor(Math.random() * cities.length)];
      let letter = "";

      let findedLetters = [];
      let remainingLetters = randomCity.length;

      let resultCity = [];
      for (let i = 0; i < randomCity.length; i++) {
         resultCity.push(" ___ ")
      };


      

      while (remainingLetters > 0) {
        
         let letter = prompt(` The name of randomly created city has ${randomCity.length} letters as follows: 
           ${resultCity} . 
         Угадайте букву или нажмите "cancel" для выхода из игры.`);

         if (letter === null) {
            break;

         } else if (letter.length > 1) {
            alert("Пожалуйста, введите только одну букву.");

         } else if (letter == "") {
            alert("Пожалуйста, введите букву.");

         } else {
            let state = remainingLetters;
            for (i = 0; i < randomCity.length; i++) {
               
               if (randomCity[i] == letter) {
                  resultCity[i] = letter;
                  remainingLetters--;
               }

            }
            if(state == remainingLetters ) {
               alert (`Увы, в этом слове нет буквы: "${letter}". Угадайте букву снова.`)
            }

         }
        
      };

      if (remainingLetters == 0) {
         return `Отлично! Было загадано слово: ${resultCity.join("")}. Спасибо за игру !`;
      } else {
         return `Your result is not final as follows: ${resultCity.join("")}. Mabe will play in future. Thank you !`;
      }


   } else { return "Thank You, you can play this game in future." };
}