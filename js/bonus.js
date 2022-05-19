if (isNaN(etaPasseggero) || (eta === "")) {
    alert("Devi inserire un numero valido!")
    let nonValido = document.getElementById("eta-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}

if ((isNaN(numKm)) || (km === "")) {
    alert("Devi inserire un numero valido!")
    let nonValido = document.getElementById("km-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}

if ((numKm <= 20) || (numKm >= 300)) {
    alert("Il numero di km inserito non è valido!")
    let nonValido = document.getElementById("km-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
    let prezzoFinale = document.getElementById("prezzo-finale")
    prezzoFinale.innerHTML = (`Non è possibile calcolare il prezzo del biglietto, inserisci i dati in maniera corretta e riprova.`)
}


/*
validare/ controllare i dati inseriti
- età è un numero?
- età è stata inserita
- km è un numero valido?
- posso inserire un minimo / massimo di km possibili?
*/