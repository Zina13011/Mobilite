
var prixVoyage = 1.2;
var prixForfait = 9.0;
var nbVoyages1 = 0;
var nbVoyages10 = 0;

document.getElementById("btnPlus1").addEventListener("click", function() {
    nbVoyages1++;
    document.getElementById("nbVoyages1").innerText = nbVoyages1;
    updateTotal1();
});

document.getElementById("btnMoins1").addEventListener("click", function() {
    if (nbVoyages1 > 0) {
        nbVoyages1--;
        document.getElementById("nbVoyages1").innerText = nbVoyages1;
        updateTotal1();
    }
});

document.getElementById("btnPlus10").addEventListener("click", function() {
    nbVoyages10++;
    document.getElementById("nbVoyages10").innerText = nbVoyages10;
    updateTotal10();
});

document.getElementById("btnMoins10").addEventListener("click", function() {
    if (nbVoyages10 > 0) {
        nbVoyages10--;
        document.getElementById("nbVoyages10").innerText = nbVoyages10;
        updateTotal10();
    }
});

function updateTotal1() {
    var total1 = nbVoyages1 * prixVoyage;
    document.getElementById("total1").innerText = total1.toFixed(2) + "€";
}

function updateTotal10() {
    var total10 = nbVoyages10 * prixForfait;
    document.getElementById("total10").innerText = total10.toFixed(2) + "€";
}

