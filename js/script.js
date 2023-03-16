// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// // INPUT
// // Chiedo all'utente una parola

// const userWord = prompt("Dimmi una parola");
// console.log(userWord)

// // VERIFICO SE LA PAROLA E' PALINDROMA
// // Se la parola splittata a rovescio e' uguale alla parola allora e' palindroma

// if(IsPalindroma(userWord)){
//     console.log("Palindromo!")
// }else{
//     console.log("la parola non e' palindroma")
// }

//  // FUNZIONE

// function IsPalindroma(userWord){
//     let reverseUserWord = userWord.split('').reverse().join('');
//     return reverseUserWord === userWord;
// };

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// INPUT

// Chiedo all'utente pari o dispari
const evenOdd = prompt("pari o dispari?");
console.log(evenOdd);

// Chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt("dimmi un numero da 1 a 5"));
console.log(userNumber);

// Genero il numero random da 1 a 5 con la funzione getRandomNr
let pcRandom = getRandomNr(1, 5);
console.log(pcRandom);

// Sommiamo i due numeri
let numbersSum = userNumber + pcRandom;
console.log(numbersSum);

let result = oddOreven(numbersSum); 
console.log(result);


// Stabiliamo il vincitore

if(result === evenOdd){
    console.log("Hai vinto");
}else{
    console.log(("hai perso"));
}

// FUNZIONI

// Funzione per generare un numero random per il computer da 1 a 5
function getRandomNr(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per vedere se la somma dei due numeri e' pari o dispari

function oddOreven() {
  if (numbersSum % 2 === 0) {
    return "pari"
  }else {
    return "dispari"
  }
}






