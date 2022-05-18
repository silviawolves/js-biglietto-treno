if (isNaN(eta) || (eta === "")) {
    alert("Devi inserire un numero valido!")
    let nonValido = document.getElementById("eta-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}

if ((isNaN(km)) || (km === "")) {
    alert("Devi inserire un numero valido!")
    let nonValido = document.getElementById("km-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}

if ((numKm <= 20) || (numKm >= 300)) {
    alert("Il numero di km inserito non è valido!")
    let nonValido = document.getElementById("km-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}


/*
validare/ controllare i dati inseriti
- età è un numero?
- età è stata inserita
- km è un numero valido?
- posso inserire un minimo / massimo di km possibili?
*/