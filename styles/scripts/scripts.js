function mettreAJourHorloge() {
  const clockElement = document.getElementById("clock");
  const maintenant = new Date();

  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");
  const secondes = String(maintenant.getSeconds()).padStart(2, "0");

  const heureActuelle = `${heures}:${minutes}:${secondes}`;
  clockElement.textContent = heureActuelle;
}

// Mettre à jour chaque seconde
setInterval(mettreAJourHorloge, 1000);

// Initialiser dès le chargement
mettreAJourHorloge();

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const totalImages = 10; // nombre d’images à faire défiler

function chargerImage() {
  const url = `https://picsum.photos/seed/${index}/500/300`;
  sliderImage.src = url;
}

function imageSuivante() {
  index = (index + 1) % totalImages;
  chargerImage();
}

function imagePrecedente() {
  index = (index - 1 + totalImages) % totalImages;
  chargerImage();
}

nextBtn.addEventListener("click", imageSuivante);
prevBtn.addEventListener("click", imagePrecedente);

// Changement automatique toutes les 5 secondes
setInterval(imageSuivante, 5000);

// Charger la première image
chargerImage();

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function chargerCitation() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  quoteEl.textContent = `"${data.quote}"`;
  authorEl.textContent = `— ${data.author}`;
}

newQuoteBtn.addEventListener("click", chargerCitation);

// Charger une première citation au démarrage
chargerCitation();