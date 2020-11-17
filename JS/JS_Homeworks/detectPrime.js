function detectPrime() {

  let number = +prompt("Ներմուծեք թիվը");
  let isPrime = true;
  let thisFileName = "detectPrime.js";
  let fileRefPresentation = "<i>For mor information please see the file <b>" + thisFileName + "</b></i>";

  return function () {

    switch (number) {
      case 0:
        isPrime = false;
        break;
      case 1:
        isPrime = false;
        break;
      case 2:
        isPrime = true;
        break;

      default:

        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            isPrime = false;
            break;
          }
        }

    }

    const message = isPrime ? "is Prime" : "is not prime";
    let result = "<h3>Your number is:" + number + " and it " + message + "</h3><hr>" + fileRefPresentation;
    return result;
  }

}
