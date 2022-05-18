"use strict"

const km = prompt('Quanti chilometri devi percorrere?')
const numKm = parseInt(km)
const eta = prompt('Quanti anni ha il passeggero?')
let etaPasseggero = parseInt(eta)

const prezzoBiglietto = km * 0.21
const scontoVenti = (20 / 100) * prezzoBiglietto
const scontoQuaranta = (40 / 100) * prezzoBiglietto
const scontoMinori = prezzoBiglietto - scontoVenti
const scontoOver = prezzoBiglietto - scontoQuaranta


if (etaPasseggero < 18) {
    const scontoMinori = prezzoBiglietto - scontoVenti
} else if (etaPasseggero > 65) {
    const scontoOver = prezzoBiglietto - scontoQuaranta
}



console.log (km, eta, prezzoBiglietto, scontoMinori, scontoOver)




/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Formula per il calcolo: km * 0.21 = prezzoBiglietto

Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
*/