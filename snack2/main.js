console.log("hello");
// l'utente inserisce due parole insuccessione con due prompt
// stampare prima la più corta poi la più lunga

const parolaUno = prompt("inserire parola");
const parolaDue = prompt("inserire parola");

// console.log(parolaUno + parolaDue);

if (parolaUno.length > parolaDue.length) {
} else if (parolaUno.length < parolaDue.length) {
  console.log(parolaDue + parolaUno);
} else if (parolaDue == parolaUno) {
  alert("valori non validi");
} else {
  console.log(parolaUno + parolaDue);
}
