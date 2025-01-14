let URL = "https://gpa.madbob.org/query.php?stop=";

// Funzione per creare una riga con il numero del bus e gli orari
function aggiungiPassaggiPerLinea(linea, orari) {
    let div = document.createElement("div");
    div.classList.add("col-12");

    let cerchio = document.createElement("div");
    cerchio.classList.add("numeroLinea");
    cerchio.innerHTML = linea;

    let p = document.createElement("p");
    p.classList.add("orariArrivo");
    p.innerHTML = orari.join(", ");

    div.appendChild(cerchio);
    div.appendChild(p);
    document.getElementById("lista").appendChild(div);
}

// Funzione per filtrare gli orari futuri rispetto all'orario corrente
function filtraOrariFuturi(lista) {
    let oraCorrente = new Date();
    return lista.filter(item => {
        let [ore, minuti] = item.hour.split(":").map(Number);
        let orarioArrivo = new Date();
        orarioArrivo.setHours(ore, minuti, 0);
        return orarioArrivo > oraCorrente;
    });
}

// Funzione per mostrare i passaggi raggruppati per linea
function mostra(lista) {
    document.getElementById("lista").innerHTML = ""; // Pulisce la lista esistente
    let passaggiPerLinea = {};

    // Raggruppa gli orari per ogni linea
    filtraOrariFuturi(lista).forEach(item => {
        if (!passaggiPerLinea[item.line]) {
            passaggiPerLinea[item.line] = [];
        }
        passaggiPerLinea[item.line].push(item.hour);
    });

    // Aggiunge le righe per ogni linea
    for (let linea in passaggiPerLinea) {
        aggiungiPassaggiPerLinea(linea, passaggiPerLinea[linea]);
    }
}

// Funzione per cercare la fermata e mostrare i risultati
function cercafermata() {
    fetch(URL + document.getElementById("num").value)
        .then(x => x.json())
        .then(y => mostra(y));
}

// Funzione per aggiornare gli orari alla versione più recente
function aggiorna() {
    cercafermata();
}
