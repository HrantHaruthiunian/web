function gameViselica() {


   let startGame = confirm("whould you like to start the game ?");


   if (startGame) {
      alert("The game 'Viselica' is started. You should find the city name by typing any letter");

      let cities = ["yerevan", "moscow", "paris", "london", "stepanakert", "bern", "washington", "brazil", "tbilisi", "tokyo"];
      let randomCity = cities[Math.floor(Math.random() * cities.length)];


      let currentRemainingLetters = randomCity.length;
      let trys = 2;
      let remainingTry = randomCity.length * trys;


      let resultCity = [];
      for (let i = 0; i < randomCity.length; i++) {
         resultCity.push(" ___ ")
      };




      while (currentRemainingLetters > 0 && remainingTry > 0) {

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

            let isRemainedLettersSame = true;
            let isLetterGuessed = false;
            let isSameLetterGuessed = false;



            for (let i = 0; i < randomCity.length; i++) {

               if (letter == randomCity[i]) {

                  switch (letter !== resultCity[i]) {

                     case true:
                        resultCity[i] = letter;
                        isLetterGuessed = true;
                        currentRemainingLetters--;
                        isRemainedLettersSame = false;
                        break;

                     case false:
                        isSameLetterGuessed = true;
                        break;
                  }

               }

            }

            if (isLetterGuessed) {
               alert(`Правильно !!! Есть букво: "${letter}". Угадайте другую букву.
                     Количество оставшейся попыток: ${remainingTry}`);
            }
            if (isSameLetterGuessed) {
               alert(`Вы уже угадали букву: "${letter}". Угадайте другую букву.
                     Количество оставшейся попыток: ${remainingTry}`);
            } else if (isRemainedLettersSame) {
               alert(`Увы, в этом слове нет буквы: "${letter}". Угадайте другую букву.
                     Количество оставшейся попыток: ${remainingTry}`);
            }

         }

      };
      
      let resultCityCorrected = [];
      resultCityCorrected[0] = resultCity[0].toUpperCase();
      for (let i = 1; i < resultCity.length; i++) {
         resultCityCorrected.push(resultCity[i]);
      }
     
      if (currentRemainingLetters == 0) {
         return `Отлично! Было загадано слово: ${resultCityCorrected.join("")} из ${randomCity.length * trys - remainingTry} попыток. Спасибо за игру !`;
      } else {
         return `Your result is not final as follows: ${resultCityCorrected.join("")} 
         The city name was ${randomCity}. Mabe will play in future. Thank you !`;
      }


   } else { return "Thank You, you can play this game in future." };
}