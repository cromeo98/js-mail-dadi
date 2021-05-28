// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// estrazione dei dadi per l'user e il pc
var dadoUser = Math.floor(Math.random() * 6) + 1;
console.log(dadoUser);

var dadoPc = Math.floor(Math.random() * 6) + 1;
console.log(dadoPc);


// Confronto tra estrazioni per valutazione maggiore o minore
if (dadoUser > dadoPc) {
    document.getElementById('text').innerHTML = 'Hai vinto! Congratulazioni'
} else if (dadoUser < dadoPc) {
    document.getElementById('text').innerHTML = 'Hai perso. F5 per riprovare..'
} else{
    document.getElementById('text').innerHTML = 'Hai pareggiato. C\'eri quasi!'
}
