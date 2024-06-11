function fermerPage() {
  window.history.back();
}

function modifierQuantite(type, delta) {
  const spanNbVoyages = document.getElementById(`nbVoyages${type}`);
  const spanTotal = document.getElementById(`total${type}`);
  let nbVoyages = parseInt(spanNbVoyages.textContent);
  let total = parseFloat(spanTotal.textContent.replace(',', '.').replace(' €', ''));

  if (nbVoyages + delta >= 0) {
      nbVoyages += delta;
      spanNbVoyages.textContent = nbVoyages;

      if (type === '1') {
          total = nbVoyages * 1.20;
      } else if (type === '10') {
          total = nbVoyages * 9.00;
      }

      spanTotal.textContent = total.toFixed(2).replace('.', ',') + ' €';
      updatePopup();
  }
}

function updatePopup() {
  const total1 = parseFloat(document.getElementById('total1').textContent.replace(',', '.').replace(' €', ''));
  const total10 = parseFloat(document.getElementById('total10').textContent.replace(',', '.').replace(' €', ''));
  const totalAmount = total1 + total10;
  const nbVoyages1 = parseInt(document.getElementById('nbVoyages1').textContent);
  const nbVoyages10 = parseInt(document.getElementById('nbVoyages10').textContent);

  document.getElementById('ticketCount').textContent = `(${nbVoyages1 + nbVoyages10})`;
  document.getElementById('totalAmount').textContent = totalAmount.toFixed(2).replace('.', ',') + ' €';

  if (totalAmount > 0) {
      document.getElementById('popup').style.display = 'block';
  } else {
      document.getElementById('popup').style.display = 'none';
  }
}

function acheter() {
  // Insérez ici la logique pour finaliser l'achat des tickets
  alert('Achat finalisé');
}







