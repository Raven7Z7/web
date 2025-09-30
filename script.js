let slideIndex = 0;
let slideInterval;

// Función principal que muestra la diapositiva correcta
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    // Oculta todas las diapositivas y quita la clase 'active' de los puntos
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    // Pasa a la siguiente diapositiva
    slideIndex++;

    // Si llega al final, vuelve a la primera
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Muestra la diapositiva actual y activa el punto correspondiente
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Función para cambiar de diapositiva al hacer clic en un punto
function currentSlide(n) {
    // n es el índice del punto (0, 1, 2...)
    // Lo ajustamos porque slideIndex empieza en 1
    slideIndex = n;
    showSlides();
    
    // Reinicia el temporizador automático para evitar un doble cambio
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 5000); // 5000 ms = 5 segundos
}


// Se ejecuta cuando la página ha cargado por completo
window.onload = function() {
    // Muestra la primera diapositiva inmediatamente
    showSlides(); 
    // Inicia el carrusel automático
    slideInterval = setInterval(showSlides, 5000); // Cambia de imagen cada 5 segundos
}