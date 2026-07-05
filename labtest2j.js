document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('converter-form');
  const amountInput = document.getElementById('amount');
  const fromCurrency = document.getElementById('from-currency');
  const toCurrency = document.getElementById('to-currency');
  const resultDiv = document.getElementById('result');

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    SAR: 3.75,
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

   
   

  
    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = 'Please enter a positive number';
    
  return;
    }

   

    const amountInUSD = amount / exchangeRates[from];
    const convertedAmount = amountInUSD * exchangeRates[to];

   
    resultDiv.textContent = `${amount.toFixed(2)} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
  
  });
});

