function gameViselica() {


   let startGame = confirm("whould you like to start the game ?");


   if (startGame) {
      alert("The game 'Viselica' is started. You should find the city name by typing any letter");

      let cities = ["yerevan", "moscow", "paris", "london", "stepanakert", "bern", "washington", "brazil", "tbilisi", "tokyo"];
      let randomCity = cities[Math.floor(Math.random() * cities.length)];


      let remainingLetters = randomCity.length;
      let trys = 20;
      let remainingTry = randomCity.length * trys;


      let resultCity = [];
      for (let i = 0; i < randomCity.length; i++) {
         resultCity.push(" ___ ")
      };




      while (remainingLetters > 0 && remainingTry > 0) {

         let letter = prompt(` The name of randomly created city has ${randomCity.length} letters as follows: 
           ${resultCity} . Hint: ${randomCity}
         Угадайте букву или нажмите "cancel" для выхода из игры. Количество попыток: ${remainingTry}`);

         if (letter !== null) { letter = letter.toLowerCase() };

         if (letter === null) {
            return "Thank You, you can play this game in future."

         } else if (letter.length > 1) {
            remainingTry--;
            alert(`Пожалуйста, введите только одну букву. 
            Количество оставшейся попыток: ${remainingTry} `);

         } else if (letter == "") {
            remainingTry--;
            alert(`Пожалуйста, введите букву. 
            Количество оставшейся попыток: ${remainingTry} `);

         } else {

            remainingTry--;
            let remainingLettersState = remainingLetters;
            let repetitionOfLetter = false;

            for (i = 0; i < randomCity.length; i++) {

               if (randomCity[i] == letter && i == 0 && letter !== resultCity[i]) {
                  resultCity[i] = letter.toUpperCase();
                  remainingLetters--;

               } else if (randomCity[i] == letter && letter !== resultCity[i]) {
                  resultCity[i] = letter;
                  remainingLetters--;

               } else if (letter == resultCity[i]) {
                  alert(`Вы уже угадали букву: "${letter}". Угадайте другую букву.
                        Количество оставшейся попыток: ${remainingTry}`);
                        repetitionOfLetter = true;
                        break;
               }

            }



            if (remainingLettersState - remainingLetters == 0 && !repetitionOfLetter ) {
               alert(`Увы, в этом слове нет буквы: "${letter}". Угадайте букву снова.
                        Количество оставшейся попыток: ${remainingTry}`);
            }

         }

      };

      if (remainingLetters == 0) {
         return `Отлично! Было загадано слово: ${resultCity.join("")} из ${randomCity.length * trys - remainingTry} попыток. Спасибо за игру !`;
      } else {
         return `Your result is not final as follows: ${resultCity.join("")}. 
         The city name was ${randomCity}. Mabe will play in future. Thank you !`;
      }


   } else { return "Thank You, you can play this game in future." };
}