// crea un array vuoto chiedi per 6 volte di inserire un numero, se è dispari inseriscilo nell'array

let list = [];

let number = 6;

for (i = number; i >= 1; i--) {
  Number(prompt("inserire numero"));
}
if (i % 2 == 1) {
  console.log(i);
}

// dovrebbe poi essere if ("benedetto valore" % 2 == 1 ){.push}
