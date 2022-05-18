"use strict"

const km = prompt('Quanti chilometri devi percorrere?')
const numKm = parseInt(km)
const eta = prompt('Quanti anni ha il passeggero?')
const etaPasseggero = parseInt(eta)

const prezzoBiglietto = km * 0.21
const scontoVenti = (20 / 100) * prezzoBiglietto
const scontoQuaranta = (40 / 100) * prezzoBiglietto
const scontoMinori = prezzoBiglietto - scontoVenti
const scontoOver = prezzoBiglietto - scontoQuaranta

console.log (km, eta, prezzoBiglietto)

if (etaPasseggero < 18) {
    scontoMinori
    console.log (scontoMinori)
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto scontato al 20% ha un costo di € ${scontoMinori}`)
} else if (etaPasseggero > 65) {
    scontoOver
    console.log (scontoOver)
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto scontato al 40% ha un costo di € ${scontoOver}`)   
} else {
    prezzoBiglietto
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto ha un costo di € ${prezzoBiglietto}`)  
}



const etaVisualizzata = document.getElementById("eta-passeggero")
etaVisualizzata.innerHTML = (`Il passeggero ha ${etaPasseggero} anni.`)

const kmVisualizzati = document.getElementById("km-passeggero")
kmVisualizzati.innerHTML = (`Il passeggero percorre ${numKm} km.`)

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