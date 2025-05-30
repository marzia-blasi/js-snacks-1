// l'utente inserisce due numeri in successione con due prompt
// il software stampa il maggiore

const numberOne = Number(prompt("numero 1 "));
const numberTwo = Number(prompt("numero 2"));
// console.log(numberOne, numberTwo);

if (numberOne > numberTwo) {
  console.log(numberOne);
} else if (numberTwo < numberOne) {
  console.log(numberTwo);
} else numberOne == numberTwo;
alert("inserire due numeri diversi!");
