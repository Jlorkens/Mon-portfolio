const clock = document.getElementById('digital-clock');

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Appel initial

function updateClock() {
  const now = new Date();

  // Formatage de l'heure (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Affichage
  document.getElementById('live-clock').textContent =
    `${hours}:${minutes}:${seconds}`;

  // Changement de couleur toutes les secondes (optionnel)
  const clockElement = document.getElementById('live-clock');
  clockElement.style.color = `hsl(${now.getSeconds() * 6}, 100%, 70%)`;
}

// Mise à jour immédiate puis toutes les secondes
updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const now = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const dateString = now.toLocaleDateString('fr-FR', options);
  const timeString = now.toLocaleTimeString('fr-FR');

  document.getElementById('live-clock').innerHTML = `
    <div>${dateString}</div>
    <div>${timeString}</div>
  `;
}