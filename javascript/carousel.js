let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(index) {
    showSlides(slideIndex += index);
}

function showSlides(index) {
    let slides = document.getElementsByClassName("slides");

    /* wrap image around */
    if (index > slides.length - 1) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    /* set all slides to display none first */
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /* set current slide to be visible */
    slides[slideIndex].style.display = "block";
}