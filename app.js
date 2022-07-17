// Carousel element is in HTML, slider element has relative position this means if we change posn of first elemnt it will have impact on other elements
//If we change margin left property of first slider and it will effect the others

let carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0;

const createSlide = () => {

    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    //Creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    
    //attaching all elements
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    h4.appendChild(document.createTextNode(movies[slideIndex].subTitle));
    p.appendChild(document.createTextNode(movies[slideIndex].desc));

    
    //In html structure H1 is above P element so we will append h1 first into content 
    content.appendChild(h1);
    content.appendChild(h4);
    content.appendChild(p);

    slide.appendChild(content);
    slide.appendChild(imgElement);

    carousel.appendChild(slide);


    //setting up img
    imgElement.src = movies[slideIndex].image;
    slideIndex++;


    // setting up elements className for styling
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    h4.className = 'movie-subT';
    p.className = 'movie-desc';

    sliders.push(slide);


    //adding sliding effect 
    if(1){

        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`; //this does the margin movement so that it creates sliding effect
    }
}

createSlide();

setInterval(() =>{
    createSlide();
},2500);



//VIDEO CARDS 

const vidCards = document.querySelectorAll('.video-card');

vidCards.forEach( item => {

        item.addEventListener('mouseover', () => {
            let video = item.children[1];
            video.play();
        })

        item.addEventListener('mouseleave', () => {
            let video = item.children[1];
            video.pause();
        })
});

//CARD SLIDERS AUTOFILL

let cardC = document.querySelector('.card-container');

let deck = [];

let deckIndex = 0;

const createDeck = () =>{


    //DOM Elements 
    let dek = document.createElement('div');
    let img = document.createElement('img');
    let cntn = document.createElement('div');
    let h2 = document.createElement('h2');
    let cate = document.createElement('h2'); //category 
    let h6 = document.createElement('h6');
    let button = document.createElement('button');

    //attaching elements
    h2.appendChild(document.createTextNode(sCards[deckIndex].name));
    cate.appendChild(document.createTextNode(sCards[deckIndex].category));
    h6.appendChild(document.createTextNode(sCards[deckIndex].desc));
    button.appendChild(document.createTextNode("Add to watchList"));

    //appending to HTML
    cntn.appendChild(h2);
    cntn.appendChild(cate);
    cntn.appendChild(h6);
    cntn.appendChild(button);

    dek.appendChild(cntn);
    dek.appendChild(img);

    cardC.appendChild(dek);

    //img setup
    img.src = sCards[deckIndex].image;
    deckIndex++;

    //giving class for CSS
    dek.className = 'card';
    img.className = 'cardImg';
    cntn.className = 'cardBody';
    h2.className = 'name';
    cate.className = 'category';
    h6.className = 'desc';
    button.className = 'watchList';

    deck.push(dek);

}

for(let i=0; i<2; i++){

    createDeck();
}

// CARD SLIDERS ARROWS

let cardContainer = document.querySelectorAll('.card-container');
let preBtn = document.querySelectorAll('.preBtn');
let nextBtn = document.querySelectorAll('.nextBtn');

cardContainer.forEach((item, i) =>{

    let containerDimensions = item.getBoundingClientRect(); //we need containers actual width excluding its overflow 
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth - 200; 
    })

    preBtn[i].addEventListener('click' , () =>{
        item.scrollLeft -= containerWidth + 200;
    })
})