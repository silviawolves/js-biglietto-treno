if (isNaN(eta) || (eta === "")) {
    alert("Devi inserire un numero valido!")
    let nonValido = document.getElementById("eta-passeggero")
    nonValido.innerHTML = `<span style="color:red">I dati inseriti non sono validi!</span>`
}

numKm = Math.min(20)
numKm = Math.max(300)






/*
validare/ controllare i dati inseriti
- età è un numero?
- età è stata inserita
- km è un numero valido?
- posso inserire un minimo / massimo di km possibili?
*/