document.addEventListener('DOMContentLoaded', () => {
    // Función para manejar el desplazamiento suave
    const smoothScrollToSection = (targetSectionId) => {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Agregar eventos de scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    // Ejemplo de navegación entre secciones
    document.querySelector('#logo-section').addEventListener('click', () => {
        setTimeout(() => {
            smoothScrollToSection('text-section');
        }, 1000); // Ajusta el tiempo de retraso en milisegundos
    });

    // Modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const logo = document.querySelector('.logo');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Cambia el logo según el modo
        if (document.body.classList.contains('dark-mode')) {
            logo.src = 'nikorico-logo2_blanco.svg';
        } else {
            logo.src = 'nikorico-logo2.svg';
        }
    });

    // Ajuste inicial del logo según el modo
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        logo.src = 'nikorico-logo2_blanco.svg';
    }
});
