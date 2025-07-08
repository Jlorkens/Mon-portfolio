const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quoteText.textContent = `"${data.quote}" — ${data.author}`;
  } catch (error) {
    quoteText.textContent = '"La créativité est contagieuse, faites-la tourner." — Albert Einstein';
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);

// Charger une citation au démarrage
fetchQuote();