console.log("hello");
// l'utente inserisce due parole insuccessione con due prompt
// stampare prima la più corta poi la più lunga

const parolaUno = prompt("inserire parola");
const parolaDue = prompt("inserire parola");

// console.log(parolaUno + parolaDue);

if (parolaUno.length > parolaDue.length) {
  console.log(parolaUno + parolaDue);
} else if (parolaUno.length < parolaDue.length) {
  console.log(parolaDue + parolaUno);
}
