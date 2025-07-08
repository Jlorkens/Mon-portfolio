const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function chargerCitation() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
    quoteEl.textContent = "Erreur de chargement 😢";
    authorEl.textContent = "";
  }
}

newQuoteBtn.addEventListener("click", chargerCitation);
  
// Charger une citation au démarrage
chargerCitation();