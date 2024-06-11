
let totalAmount = 0;
let ticketCount = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('section-acheter').style.display = 'block';
});

function ShowAcheter() {
    document.getElementById('section-paiement').style.display = 'none';
    document.getElementById('section-acheter').style.display = 'block';
}

function showPaiement() {
    document.getElementById('section-acheter').style.display = 'block';
    document.getElementById('section-paiement').style.display = 'block';

    const totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0.00;
    const ticketDetails = localStorage.getItem('ticketDetails') || '';

    document.getElementById('totalOrder').textContent = totalAmount.toFixed(2) + ' €';
    document.getElementById('orderDetails').textContent = ticketDetails;
}

function modifierQuantite(type, amount) {
    const nbVoyages = document.getElementById(`nbVoyages${type}`);
    let count = parseInt(nbVoyages.textContent);
    count = Math.max(0, count + amount);
    nbVoyages.textContent = count;

    const prix = type === '1' ? 1.20 : 9.00;
    const total = count * prix;
    document.getElementById(`total${type}`).textContent = total.toFixed(2) + ' €';

    calculerTotal();
}

function calculerTotal() {
    const nbVoyages1 = parseInt(document.getElementById('nbVoyages1').textContent);
    const nbVoyages10 = parseInt(document.getElementById('nbVoyages10').textContent);

    totalAmount = (nbVoyages1 * 1.20) + (nbVoyages10 * 9.00);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2) + ' €';

    ticketCount = nbVoyages1 + nbVoyages10;
    document.getElementById('ticketCount').textContent = `(${ticketCount})`;

    localStorage.setItem('totalAmount', totalAmount.toFixed(2));
    localStorage.setItem('ticketDetails', `1 voyage aix en bus x${document.getElementById('nbVoyages1').textContent} ${document.getElementById('total1').textContent}, 10 voyages aix en bus x${document.getElementById('nbVoyages10').textContent} ${document.getElementById('total10').textContent}`);
}

function togglePayButton() {
    const checkbox = document.getElementById("termsCheckbox");
    const payButton = document.getElementById("payButton");
    payButton.disabled = !checkbox.checked;
}




document.getElementById('pay-button').addEventListener('click', function() {
    // Masquer le contenu principal
    document.getElementById('main-content').classList.add('hidden');
    
    // Afficher la page de paiement
    document.getElementById('payment-page').classList.remove('hidden');
    
    // Récupérer le montant total de la page précédente
    var totalAmount = document.getElementById('total-amount').innerText;
    
    // Afficher le montant sur la page de paiement
    document.getElementById('payment-amount').innerText = totalAmount;
});