export {}

let slideIndex = 1;

const leftButton = document.querySelectorAll<HTMLButtonElement>(".wheel-left");
const rightButton = document.querySelectorAll<HTMLButtonElement>(".wheel-right");

leftButton.forEach((element) => {
    element.addEventListener("click", () => {
        changeSlide(-1)
    })
})

rightButton.forEach((element) => {
    element.addEventListener("click", () => {
        changeSlide(1)
    })
})

function changeSlide(n: number) {
    showSlides(slideIndex += n);
}

function showSlides(n: number) {
    let i;
    let slides = document.querySelectorAll<HTMLElement>(".project");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
    slides[slideIndex-1].dataset.status = "active";
}