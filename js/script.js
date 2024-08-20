//1 prendo gli elementi di mio interesse dal DOM
//2 preparo la sorgente delle img
//3 genero le immagini
//4 rimetto in pagina le immagini generate
//5 richiamo dal DOM le immagini generate
//6 rendiamo visibile la prima immagine dando classe active
//7 creiamo una freccia per scorrere avanti le immagini
//8 creiamo una freccia per scorrere indietro le immagini
//9 BONUS: aggiungiamo un ciclo infinito per non interromperre lo scorrimento delle immagini avanti e inditro
//10 BONUS: creiamo delle miniature "attive " delle nostre immagini.

//1 prendo gli elementi di mio interesse dal DOM

const carouselGallery = document.getElementById('gallery');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const thumbGallery = document.getElementById('thumbnails');

//2 preparo la sorgente delle img

const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

//3 genero le immagini

let imgs = '';

for(let i = 0; i < sources.length; i++) {
    const currentImages = sources[i];
    imgs += `<img src="${currentImages}" alt="illustration${i} ">`;
}

//4 rimetto in pagina le immagini generate (img e thumbnail)

carouselGallery.innerHTML = imgs;
thumbGallery.innerHTML = imgs;

//5 richiamo dal DOM le immagini generate (img e thumbnail)

const images = document.querySelectorAll('#gallery img');
const thumb = document.querySelectorAll('#thumbnails img');

//6 rendiamo visibile la prima immagine e thumbnail dando classe active

let currentActiveImage = 0;
images[currentActiveImage].classList.add('active');
thumb [currentActiveImage].classList.add('active');


//7 creiamo una freccia per scorrere avanti le immagini
 
nextArrow.addEventListener('click', function() {

// rimuoviamo la classe active dall'immagine attuale (e al thumbnail)
images[currentActiveImage].classList.remove('active');
thumb[currentActiveImage].classList.remove('active');

// incrementiamo il nostro indice
currentActiveImage++ ;

//9a BONUS: aggiungiamo un ciclo infinito per non interromperre lo scorrimento delle immagini avanti

if(currentActiveImage === images.length) {currentActiveImage = 0;}

// aggiungiamo la classe active all'immagine successiva (e al thumbnail)
images[currentActiveImage].classList.add('active');
thumb[currentActiveImage].classList.add('active');
});

//8 creiamo una freccia per scorrere indietro le immagini (e al thumbnail)
 
prevArrow.addEventListener('click', function() {
// rimuoviamo la classe active dall'immagine attuale
images[currentActiveImage].classList.remove('active');
thumb[currentActiveImage].classList.remove('active');

// decrementiamo il nostro indice
currentActiveImage-- ;

//9b BONUS: aggiungiamo un ciclo infinito per non interromperre lo scorrimento delle immagini indietro

if(currentActiveImage < 0) {currentActiveImage = images.length -1; } 
    
// aggiungiamo la classe active all'immagine successiva (e al thumbnail)
images[currentActiveImage].classList.add('active');
thumb[currentActiveImage].classList.add('active');
});

