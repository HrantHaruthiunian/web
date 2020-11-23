// Write a function that returns true if a hash contains the specified key, and false otherwise.

function findHashKey() {

   let thisFileName = "hashKey.js";
   let fileRefPresentation = `<i>For mor information please see the file <b> ${thisFileName} </b></i>`;
   let key = prompt("Please enter the key");

   let obj1 = {
      a: 44,
      b: 45,
      c: 46
   }

   let obj2 = {
      craves: true,
      midnight: true,
      snack: true
   }

   let obj3 = {
      pot: 1,
      tot: 2,
      not: 3
   }

   return function () {
      let result = "";
      for (let prop in obj1) {
         if (prop == key) {
            result = `<h3>Your have input the key: "${key}" <br> Your key exists in the object selected </h3><hr> ${fileRefPresentation}`;
            break;
         }
         else {
            result = `<h3>Your have input the key: "${key}" <br> Your key doesn't exist in the object selected </h3><hr> ${fileRefPresentation}`;

         }

      }
      return result;
   }

}
