let number = +prompt("Ներմուծեք թիվը");
let isPrime = true;

switch (number) {
  case 0:
    isPrime = false;
    break;
  case 1:
    isPrime = true;
    break;
  case 2:
    isPrime = true;
    break;
  case 3:
    isPrime = true;
    break;
  case 5:
    isPrime = true;
    break;
  case 7:
    isPrime = true;
    break;

  default:
    if (number % 2 === 0) {
      isPrime = false;
    }

}

const message = isPrime ? "is Prime" : "is not prime";
document.write("Your number is:" + number + " and it " + message)
