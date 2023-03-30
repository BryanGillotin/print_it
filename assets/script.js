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

arrowLeft.addEventListener("click", onArrowClick);

/*Arrow Right*/

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", onArrowClick);

/*Fonction*/

function onArrowClick() {
    let direction = 0;
    if (this.classList.contains("arrow_left")) {
        direction = -1;
    } else {
        direction = 1;
    }
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
    updateBulletPoints(currentSlide);
}

function showSlide(currentSlide) {
    const slide = slides[currentSlide];
    const image = document.querySelector(".banner-img");
    const paragraph = document.querySelector("#banner p");
    image.alt = slide.image;
    image.src = `./assets/images/slideshow/${slide.image}`;
    paragraph.innerHTML = slide.tagLine;
}

function updateBulletPoints(currentSlide) {
    const bulletPoints = document.querySelectorAll(".dots .dot");
    for (let i = 0; i < bulletPoints.length; i++) {
        const bulletPoint = bulletPoints[i];
        if (currentSlide === i) {
            bulletPoint.classList.add("dot_selected");
        } else {
            bulletPoint.classList.remove("dot_selected");
        }
    }
}
