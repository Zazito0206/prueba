// -------------- MODO OSCURO --------------
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Inicializa el estado del modo oscuro
    if (localStorage.getItem('darkmode') === 'true') {
        body.classList.add('darkmode');
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }

    // Alterna el modo oscuro al hacer clic
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('darkmode');
        const isDark = body.classList.contains('darkmode');
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkmode', isDark);
    });
});

// -------------- BANNER SLIDER --------------
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.banner-dot');
let slideIndex = 0;
let bannerInterval;

// Muestra la diapositiva correspondiente
function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === n);
        dots[i].classList.toggle('active', i === n);
    });
    slideIndex = n;
}

// Pasa a la siguiente diapositiva
function nextSlide() {
    const next = (slideIndex + 1) % slides.length;
    showSlide(next);
}

// Inicia el intervalo automático del slider
function startBannerInterval() {
    bannerInterval = setInterval(nextSlide, 5500);
}

// Inicializa el slider
function initBannerSlider() {
    showSlide(slideIndex);
    startBannerInterval();

    dots.forEach((dot, idx) => {
        dot.onclick = function () {
            clearInterval(bannerInterval);
            showSlide(idx);
            startBannerInterval();
        };
    });
}

// Espera a que el DOM esté listo para inicializar el slider
document.addEventListener('DOMContentLoaded', initBannerSlider);
