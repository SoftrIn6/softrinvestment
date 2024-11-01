// Example balances (in a real application, these values would be fetched from a backend)
let balances = {
    BTC: 0.000000,
    ETH: 0.000000,
    USDT: 0.00,
    LTC: 0.000000
};

// Functions to update balances
function updateBalances() {
    document.getElementById("btc-balance").textContent = balances.BTC + " BTC";
    document.getElementById("eth-balance").textContent = balances.ETH + " ETH";
    document.getElementById("usdt-balance").textContent = balances.USDT + " USDT";
    document.getElementById("ltc-balance").textContent = balances.LTC + " LTC";
}

// Simulate deposit functionality
function deposit(currency) {
    let amount = prompt(`Enter the amount of ${currency} to deposit:`);
    if (amount && !isNaN(amount)) {
        balances[currency] += parseFloat(amount);
        updateBalances();
        alert(`${amount} ${currency} deposited successfully!`);
    }
}

// Simulate withdraw functionality
function withdraw(currency) {
    let amount = prompt(`Enter the amount of ${currency} to withdraw:`);
    if (amount && !isNaN(amount) && parseFloat(amount) <= balances[currency]) {
        balances[currency] -= parseFloat(amount);
        updateBalances();
        alert(`${amount} ${currency} withdrawn successfully!`);
    } else {
        alert(`Insufficient balance or invalid input!`);
    }
}

// Initialize balances on page load
document.addEventListener("DOMContentLoaded", updateBalances);
