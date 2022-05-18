"use strict"

let km = prompt('Quanti chilometri devi percorrere?')
let numKm = parseInt(km)
let eta = prompt('Quanti anni ha il passeggero?')
let etaPasseggero = parseInt(eta)

const prezzoBiglietto = km * 0.21
const scontoVenti = (20 / 100) * prezzoBiglietto
const scontoQuaranta = (40 / 100) * prezzoBiglietto
const scontoMinori = prezzoBiglietto - scontoVenti
const scontoOver = prezzoBiglietto - scontoQuaranta

const prezzoMinori = scontoMinori.toFixed(2)
const prezzoOver = scontoOver.toFixed(2)
const prezzoGenerico = prezzoBiglietto.toFixed(2)

console.log (km, eta, prezzoBiglietto)

if (etaPasseggero < 18) {
    prezzoMinori
    console.log (prezzoGenerico, prezzoMinori)
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto scontato al 20% ha un costo di € ${prezzoMinori}`)
} else if (etaPasseggero > 65) {
    prezzoOver
    console.log (prezzoGenerico, prezzoOver)
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto scontato al 40% ha un costo di € ${prezzoOver}`)   
} else {
    prezzoGenerico
    console.log (prezzoBiglietto, prezzoGenerico)
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Il biglietto ha un costo di € ${prezzoGenerico}`)  
}

let etaVisualizzata = document.getElementById("eta-passeggero")
etaVisualizzata.innerHTML = (`Il passeggero ha ${etaPasseggero} anni.`)

let kmVisualizzati = document.getElementById("km-passeggero")
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