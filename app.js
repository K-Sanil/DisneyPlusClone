// Carousel element is in HTML, slider element has relative position this means if we change posn of first elemnt it will have impact on other elements
//If we change margin left property of first slider and it will effect the others

const carousel = document.querySelector('.carousel');

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
    imgElement.appendChild(document.createTextNode(''));
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

    // setting up elements className
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    h4.className = 'movie-subT';
    p.className = 'movie-desc';

    sliders.push(slide);

    //adding sliding effect 

    if(sliders.length){

        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`; //this does the margin movement so that it creates sliding effect
    }
}

for(let i = 0; i < 3; i++){

    createSlide();
}

setInterval(() =>{
    createSlide();
},3000);


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

// card SLiders

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