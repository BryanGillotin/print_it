const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

/*Variable*/

let currentSlide = 0;

/*Arrow Left*/

const arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);

arrowLeft.addEventListener("click", onArrowClick);

/*Arrow Right*/

const arrowRight = document.querySelector(".arrow_right");
console.log(arrowRight);

arrowRight.addEventListener("click", onArrowClick);

/*Fonction*/

function onArrowClick() {
    console.log(this, currentSlide);
    let direction = 0;
    if (this.classList.contains("arrow_left")) {
        console.log("clique sur la flèche gauche");
        direction = -1;
    } else {
        console.log("clique sur la flèche droite");
        direction = 1;
    }
    currentSlide += direction;
    console.log(currentSlide);

    /*à faire*/

    console.log(slides[currentSlide]);
}
