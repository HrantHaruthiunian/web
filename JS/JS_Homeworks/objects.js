function objects() {

   let mouse = {
      name: "Puy-Puy",
      voice: "piu-piu",
      eat: "cheese",
      move: function moveMouse(distance) {
         alert(this.name + " is moving for a " + distance);
      },
      getVoice: getVoice
   }
   let cat = {
      name: "Tom",
      voice: "miaou",
      eat: "mouse",
      move: function moveCat(distance) {
         alert(this.name + " is moving for a " + distance);
      },
      getVoice: getVoice
   }
   let dog = {
      name: "Jony",
      voice: "haf-haf",
      eat: "meet",
      move: function moveDog(distance) {
         alert(this.name + " is moving for a " + distance);
      },
      getVoice: getVoice
   }

   function getVoice() {
      alert("I am " + this.name + " and I can do " + this.voice);

   }


   mouse.getVoice();
   cat.getVoice();
   dog.getVoice();





}



