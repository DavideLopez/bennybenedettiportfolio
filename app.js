// TRANSLATE

const translateButton = document.getElementById('translateButton');
const pElement = document.querySelector('.lead');
const plangElement = document.querySelector('.lang');
const h3Element = document.querySelector('.slideleft');
const h4Element = document.querySelector('.slideright');
const h2Element = document.querySelector('.about-title');
const spanElement = document.querySelector('.scroll-text');

const originalText = {
  p: pElement.textContent,
  plang: plangElement.textContent,
  h3: h3Element.textContent,
  h4: h4Element.textContent,
  h2: h2Element.textContent,
  span: spanElement.textContent
};

const newText = {
  p: "Ciao! Mi chiamo Benedetta, sono nata nel 1987, sono una Sarta residente a Roma e ho studiato all'Accademia della Moda e del Costume, Ho lavorato anche per Trussardi e attualmente, da 3 anni lavoro presso il Teatro dell'Opera di Roma, La mia più grande Passione e il mio Amore. Realizzo inoltre, Pantaloni, Abiti e Mantelli sù misura per me stessa, e per Spettacoli Teatrali, se vuoi contattarmi o scaricare il mio Curriculum, ti basta cliccare uno dei pulsanti! ",
  plang: 'Cambia Lingua',
  h3: 'Qui sotto puoi visualizzare alcuni dei miei Lavori!',
  h4: 'Bozzetti di disegno, Abiti e Make-Up realizzati da me',
  h2: 'Chi Sono',
  span: 'Ritorna in Alto'
};

let isTransformed = false;

translateButton.addEventListener('click', () => {
  if (isTransformed) {
    pElement.textContent = originalText.p;
    plangElement.textContent = originalText.plang
    h3Element.textContent = originalText.h3;
    h4Element.textContent = originalText.h4;
    h2Element.textContent = originalText.h2;
    spanElement.textContent = originalText.span;
    translateButton.innerHTML = '<img src="./img/italy.png" alt="italian" style="height: 25px;"> ITA';
  } else {
    pElement.textContent = newText.p;
    plangElement.textContent = newText.plang;
    h3Element.textContent = newText.h3;
    h4Element.textContent = newText.h4;
    h2Element.textContent = newText.h2;
    spanElement.textContent = newText.span;
    translateButton.innerHTML = '<img src="./img/english.png" style="height: 25px;"> ENG';
  }

  isTransformed = !isTransformed;
});
///////////////////////////////////////////////////////

// PAGE REFRESH
document.getElementById("reloadPageImage").addEventListener("click", function () {
  location.reload(); // Ricarica la pagina
});
///////////////////////////////////////////////////////

// autoscroll up at refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
/////////////////////////////////////////////////////////

// CLICK TO SCROLL TOP 
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostra o nasconde il pulsante in base alla posizione dello scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scorri verso l'alto quando il pulsante viene cliccato
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
///////////////////////////////////////////////////////////////////////

var loadMoreButton = document.getElementById("loadMore");
var dreamContainers = document.querySelectorAll(".dream");

loadMoreButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Se ci sono immagini nascoste, mostrale
  dreamContainers.forEach(function(dream) {
    var hiddenImages = dream.querySelectorAll(":scope > img.hidden");

    if (hiddenImages.length > 0) {
      hiddenImages.forEach(function(image) {
        image.classList.remove("hidden");
      });
      loadMoreButton.textContent = "Hide";
    } else {
      // Se tutte le immagini sono già mostrate, nascondile di nuovo
      hiddenImages = dream.querySelectorAll(":scope > img:not(:first-child)");
      hiddenImages.forEach(function(image) {
        image.classList.add("hidden");
      });
      loadMoreButton.textContent = "Show More";
    }
  });
});



