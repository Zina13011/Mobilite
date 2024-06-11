   // Payment processing logic here
   alert('Payment successful!');
});

function isValidExpiryDate(dateString) {
    // Example of simple validation for expiry date
    let [month, year] = dateString.split('/');
    let currentYear = new Date().getFullYear() % 100;
    let currentMonth = new Date().getMonth() + 1;

    if (parseInt(month) < 1 || parseInt(month) > 12) {
        return false;
    }

    if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        return false;
    }

    return true;
}

