/*
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”

🎯 BONUS
Se è null: stampa “Il dato è vuoto”
Se è un array: stampa la sua lunghezza
Se è una Promise: attendi che si risolva e stampa il valore del resolve.
*/

let dati: unknown;
if (typeof dati === "string") {
  console.log(dati.toUpperCase());
} else if (typeof dati === "number") {
  console.log(dati * 2);
} else if (typeof dati === "boolean") {
  console.log(dati ? "si" : "no");
} else if (dati === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(dati)) {
  console.log(dati.length);
} else if (dati instanceof Promise) {
  dati.then((msg) => console.log(msg));
} else {
  console.log("tipo non supportato");
}
