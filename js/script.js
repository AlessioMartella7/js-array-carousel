/* Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.*/


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

//2 preparo la sorgente delle img

const sources = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp']

//3 genero le immagini

let imgs = '';

for(let i = 0; i < sources.length; i++) {
    const currentImages = sources[i];
    imgs += `<img src="${currentImages}" alt="illustration${i} ">`;
}

//4 rimetto in pagina le immagini generate

carouselGallery.innerHTML = imgs;

//5 richiamo dal DOM le immagini generate

const images = document.querySelectorAll('#gallery img');

//6 rendiamo visibile la prima immagine dando classe active

let currentActiveImage = 0;
images[currentActiveImage].classList.add('active');

//7 creiamo una freccia per scorrere avanti le immagini
 
nextArrow.addEventListener('click', function() {
// rimuoviamo la classe active dall'immagine attuale
images[currentActiveImage].classList.remove('active');
// incrementiamo il nostro indice
currentActiveImage++ ;

//9a BONUS: aggiungiamo un ciclo infinito per non interromperre lo scorrimento delle immagini avanti

if(currentActiveImage === images.length) {currentActiveImage = 0;}

// aggiungiamo la classe active all'immagine successiva
images[currentActiveImage].classList.add('active');
});

//8 creiamo una freccia per scorrere indietro le immagini
 
prevArrow.addEventListener('click', function() {
// rimuoviamo la classe active dall'immagine attuale
images[currentActiveImage].classList.remove('active');

// decrementiamo il nostro indice
currentActiveImage-- ;

//9b BONUS: aggiungiamo un ciclo infinito per non interromperre lo scorrimento delle immagini indietro

if(currentActiveImage < 0) {currentActiveImage = images.length -1; } 
    
// aggiungiamo la classe active all'immagine successiva
images[currentActiveImage].classList.add('active');
});

