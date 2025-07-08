const slider = document.getElementById('image-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
const images = [50];

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
setInterval(imageSuivante, 5000);



// Initialisation
loadImages();