let balance = 0;

function deposit() {
  const amount = prompt("Enter deposit amount:");
  if (amount && !isNaN(amount)) {
    balance += parseFloat(amount);
    updateBalance();
  }
}

function withdraw() {
  const amount = prompt("Enter withdrawal amount:");
  if (amount && !isNaN(amount) && balance >= amount) {
    balance -= parseFloat(amount);
    updateBalance();
  } else {
    alert("Insufficient funds or invalid amount.");
  }
}

function exchange() {
  alert("Exchange feature coming soon!");
}

function updateBalance() {
  document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
}
