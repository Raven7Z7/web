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

// --- SMOOTH SCROLL PARA EL MENÚ LATERAL ---
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces del menú lateral
    const menuLinks = document.querySelectorAll('.menu-lateral a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenimos el salto brusco

            const targetId = this.getAttribute('href'); // Obtenemos el ID (ej: '#mision')
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // La magia del desplazamiento suave
                    block: 'start'
                });
            }
        });
    });
});

// --- LÓGICA PARA LAS PESTAÑAS (TABS) DE LA PÁGINA "SOBRE EL PORTAL" ---
document.addEventListener('DOMContentLoaded', function() {
    
    // Solo ejecuta este código si estamos en la página correcta
    const tabContainer = document.querySelector('.contenido-dos-columnas');
    if (tabContainer) {
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');

        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Evita que la página salte

                // 1. Quita la clase 'active' de todos los enlaces y contenido
                tabLinks.forEach(item => item.classList.remove('active'));
                tabContents.forEach(item => item.classList.remove('active-content'));

                // 2. Añade la clase 'active' al enlace clickeado
                this.classList.add('active');

                // 3. Muestra el contenido correspondiente
                const targetId = this.getAttribute('href');
                const targetContent = document.querySelector(targetId);
                if (targetContent) {
                    targetContent.classList.add('active-content');
                }
            });
        });
    }
});