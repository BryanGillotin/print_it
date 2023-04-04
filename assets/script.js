const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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

// On initialise une variable qui représente le numéro de l'image actuel (entre 0 et 3)

let currentSlide = 0;

/*Arrow Left*/

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", onArrowClick);

/*Arrow Right*/

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", onArrowClick);

/*Fonction*/
/**
 * @description Cette fonction gère la direction de défilement au click sur les flèches
 * et déclenche les fonctions d'affichage de l'image et du bullet point correspondant au numéro de l'image
 */
function onArrowClick() {
    // gestion de la direction
    let direction = 0;
    if (this.classList.contains("arrow_left")) {
        direction = -1;
    } else {
        direction = 1;
    }
    // mise à jour du numéro d'image
    currentSlide += direction;
    // Si numéro inférieur à 0, on reviens à 3 et si numéro supérieur à 3, on reviens à 0
    if (currentSlide < 0) {
        // Si inférieur à 0
        currentSlide = slides.length - 1; // On passe à 3
    } else if (currentSlide > slides.length - 1) {
        // Sinon si supérieur à 3
        currentSlide = 0; // On reviens à 0
    }
    showSlide(currentSlide);
    updateBulletPoints(currentSlide);
}

/**
 * @description Fonction permettant l'affichage d'une image en fonction de son numéro ainsi que du texte associé
 * @param {integer} currentSlide Le numéro d'image
 */
function showSlide(currentSlide) {
    // Récupération de la ligne du tableau (ligne 1)
    const slide = slides[currentSlide];
    // Récupération des balises "image" et "paragraphe"
    const image = document.querySelector(".banner-img");
    const paragraph = document.querySelector("#banner p");
    // Mise à jour de l'image
    image.alt = slide.image;
    image.src = `./assets/images/slideshow/${slide.image}`;
    // Mise à jour du paragraphe
    paragraph.innerHTML = slide.tagLine;
}

/**
 * @description Fonction permettant la mise en avant du bullet point en fonction du numéro d'image
 * @param {integer} currentSlide Le numéro d'image
 */
function updateBulletPoints(currentSlide) {
    // Récupération de toutes les balises des bullet points
    const bulletPoints = document.querySelectorAll(".dots .dot");
    // Boucle pour parcourir la liste des bullet points
    for (let i = 0; i < bulletPoints.length; i++) {
        // Pour chaque bullet point
        const bulletPoint = bulletPoints[i];
        if (currentSlide === i) {
            // Si il correspond au numéro d'image, on le met en avant
            bulletPoint.classList.add("dot_selected");
        } else {
            // Sinon on lui retire la class "dot_selected"
            bulletPoint.classList.remove("dot_selected");
        }
    }
}
