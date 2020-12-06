function gameViselica() {
   let gamerName = prompt(`Բարև Ձեզ: Ես ANDROID-ն եմ: Իսկ ինչ է Ձեր անունը ?`);

   let startGame = confirm(`Շատ լավ ${gamerName} ջան, ուրախ եմ ծանոթանալու համար: Դու ցանկանում ես սկսել խաղը ? եթե այո, ապա սեղմիր ՛ok՛ կոճակը:`);
   let cities = ["հրանտ", "նարեկ", "ռոզա", "նատա", "այդա", "արմինե", "աբո", "զավեն"];
   let food = ['գաթա', 'բանան', 'նուռ', 'խնձոր', 'ելակով տորթ', 'սերկեվիլ', 'մի բան', 'ինչ ուզում ես'];
   let randomFood = getRandomItem(food);

   if (startGame) {

      alert(`Ապրեես ${gamerName}: Խաղը սկսված է: Հիմա ես կմտապահեմ քո հարազատներից մեկի անունը իսկ դու կփորձես գուշակել:`);
      let randomCity = getRandomItem(cities);
      
      let answerArray = getArrayForAnswer(randomCity);
      let givenAttempts = getInitialАttempts(randomCity, 2);

      let remainingAttempts = givenAttempts; // for start of the game they are the same.
      let nonGuessedLetters = randomCity.length; // for start of the game they are the same.

      while (remainingAttempts > 0 && nonGuessedLetters > 0) {

         let letter = getLetterFromDialog(gamerName, answerArray, remainingAttempts, randomCity);

         if (letter === null) { return `Շատ լավ, ${gamerName}: Եթե չես ցանկանում շարունակել խաղը, կարող ես այն սկսել հետո:` }
         else { letter = letter.toLowerCase() };

         if (letter.length > 1) {
            remainingAttempts--;
            alert(`${gamerName}, խաղի կանոնների համաձայն դու պետք է մեկ տառ մուտքագրես, այլ ոչ թե միա քանի: 
            Ասեմ նաև, որ քո գուշակելու հնարավորությունը նվազեց մեկով, այն այժմ ${remainingAttempts} է: Ուշադիր եղիր և կրկին տառ գուշակիր:`);

         } else if (letter == "") {
            remainingAttempts--;
            alert(`${gamerName}, մոռացար տառը մուտքագրես: Ուշադիր եղիր ախր: Հո սոված չես մնացել ??? Գնա ${randomFood} կեր:
            Ասեմ նաև, որ քո գուշակելու հնարավորությունը նվազեց ևս մեկով, այն այժմ ${remainingAttempts} է: Կրկին փորձիր:`);

         } else {
            remainingAttempts--;

            let isRemainedLettersSame = true;
            let isLetterGuessed = false;
            let isSameLetterGuessed = false;

            for (let i = 0; i < randomCity.length; i++) {

               if (letter == randomCity[i]) {

                  switch (letter !== answerArray[i]) {

                     case true:
                        answerArray[i] = letter;
                        isLetterGuessed = true;
                        nonGuessedLetters--;
                        isRemainedLettersSame = false;
                        break;

                     case false:
                        isSameLetterGuessed = true;
                        break;
                  }

               }

            }

            if (isLetterGuessed) {
               alert(`Ճիշտ էէէէ, ապրեեես: Կա "${letter}" տառը:
               Հիմա գուշակիր հաջորդ տառը: 
               Հաշվի առ, որ քեզ մնացել է կատարել գուշակման ${remainingAttempts}  փորձ:`);
            }
            if (isSameLetterGuessed) {
               alert(`${gamerName} ջան ուշադիր եղիր, դու արդեն գուշակել էիր "${letter}" տառը: 
               Հիմա գուշակիր հաջորդ տառը: Բայց մինչ այդ գնա ${randomFood} կեր, որ ուշադրությունդ լավանա:
               Հաշվի առ, որ քեզ մնում է կատարել գուշակման ${remainingAttempts}  փորձ`);
            } else if (isRemainedLettersSame) {
               alert(`Ափսոոս, անվան մեջ չկա "${letter}" տառը: Հիմա գուշակիր հաջորդ տառը: 
                  Գնա ${randomFood} կեր ուժեղացի, որ չսխալվես հանկարծ:
                  Հաշվի առ, որ քեզ մնացել է կատարել գուշակման ${ remainingAttempts }  փորձ:`);
            }

         }

      };

      return showAnswerAndCongratulatePlayer(gamerName, randomCity, answerArray, givenAttempts, remainingAttempts, nonGuessedLetters, randomFood);

   } else { return `Շատ լավ, ${gamerName}: Եթե չես ցանկանում շարունակել խաղը, կարող ես այն սկսել հետո: Գնա ${randomFood} կեր:` };

   function getRandomItem(arrayOfItems) {
      return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
   };

   function getArrayForAnswer(nameOfCity) {
      let answerArray = [];
      for (let i = 0; i < nameOfCity.length; i++) {
         answerArray.push(" ___ ")
      };
      return answerArray;
   };

   function getInitialАttempts(givenCityName, qoefficient) {
      return givenCityName.length * qoefficient;
   }

   function getLetterFromDialog(gamerName, answerArray, remainingTry, hint) {
      return prompt(` ${gamerName} ջան, ես մտապահել եմ քո հարազատներից մեկի անունը, որ բաղկացած է  ${answerArray.length} տառից:
                          ${answerArray}  : 
         Խնդրում եմ գուշակիր տառ: Դու ունես գուշակելու ${remainingTry} հնարավորություն`);
   };

   function showAnswerAndCongratulatePlayer(gamerName, randomCity, answerArray, givenАttempts, remainingAttempts, nonGuessedLetters, food) {

      let resultCityCorrected = [];
      resultCityCorrected[0] = answerArray[0].toUpperCase();
      for (let i = 1; i < answerArray.length; i++) {
         resultCityCorrected.push(answerArray[i]);
      }

      if (nonGuessedLetters == 0) {
         return `${gamerName} բայց դու ինչ տիպն ես: <br>
         Փաստորեն կարողացար գուշակել  ${resultCityCorrected.join("")} անունը ընդամենը ${givenАttempts - remainingAttempts} փորձից:
         Շատ ապրես դու !!! Որպես մրցանակ կարող ես ուտել ${food}:`;
      } else {
         return `Անվան գուշակությունը, ցավոք, կիսատ մնաց ահա այսպես  ${resultCityCorrected.join("")}:<br>
         Իմ մտապահած անունը  ${randomCity}ն էր: Դե լավ ոչինչ: Հիմա գնա ${food} կեր, որ ուժեղանաս ու գաս, հաղթես:`;
      }
   };

}