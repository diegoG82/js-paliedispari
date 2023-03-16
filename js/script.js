// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


// INPUT
// Chiedo all'utente una parola

const userWord = prompt("Dimmi una parola");
console.log(userWord)

// VERIFICO SE LA PAROLA E' PALINDROMA
// Se la parola splittata a rovescio e' uguale alla parola allora e' palindroma

if(IsPalindroma(userWord)){
    console.log("Palindromo!")
}else{
    console.log("la parola non e' palindroma")
}

 // FUNZIONE

function IsPalindroma(userWord){
    let reverseUserWord = userWord.split('').reverse().join('');
    return reverseUserWord === userWord;
};





// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// INPUT



