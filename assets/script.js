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
    //boucle infini here (entre 0 et 3)
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
    console.log(`selectionner le bullet points n°${currentSlide}`);
    //récup la liste des bullets points
    //faire une boucle for pour les parcourir (regarder code en bas de la page)(note test)
    //faire une condition pour add ou remove la class dotselected
}

/*test*/

const tag = prompt("indiquer un nom de balise");
console.log(tag);
let currentTag = 0;
//récuperer la liste demander
const tags = document.querySelectorAll(tag);
console.log(tags);
//ajouter un évènement sur les touches directionnelles sur la page
document.addEventListener("keydown", test);
//créé la fonction de l'évènement pour entourer une des balises rechercher
function test(event) {
    if (event.key === "ArrowLeft") {
        currentTag = currentTag - 1;
    } else if (event.key === "ArrowRight") {
        currentTag = currentTag + 1;
    } else {
        console.warn(event.key);
        return;
    }
    console.log(currentTag);
    for (let i = 0; i < tags.length; i++) {
        console.log(i, tags[i]);
        if (i === currentTag) {
            tags[i].style.border = "1px solid red";
            tags[i].classList.add("bg-yellow");
        } else {
            tags[i].style.border = "none";
            tags[i].classList.remove("bg-yellow");
        }
    }
}
