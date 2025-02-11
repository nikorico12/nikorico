// Función para copiar email
function copyEmail() {
    const email = 'info@nikorico.es';
    navigator.clipboard.writeText(email)
}

// Scroll suave a proyectos
let lastScroll = 0;
window.addEventListener('wheel', (e) => {
    const currentScroll = window.scrollY;
    
    if(currentScroll === 0 && e.deltaY > 0) {
        window.scrollTo({
            top: document.getElementById('projects').offsetTop,
            behavior: 'smooth'
        });
    }
    
    lastScroll = currentScroll;
});



// Funciones de vista expandida
function showExpandedView(projectId) {
    const expandedView = document.getElementById('expandedView');
    expandedView.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeExpandedView() {
    document.getElementById('expandedView').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fullscreen screenshots
function openFullscreen(img) {
    const overlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImg = overlay.querySelector('.fullscreen-image');
    fullscreenImg.src = img.src;
    overlay.style.display = 'flex';
}

function closeFullscreen() {
    document.querySelector('.fullscreen-overlay').style.display = 'none';
}

// Cerrar al hacer click fuera
window.onclick = function(event) {
    const expandedView = document.getElementById('expandedView');
    if (event.target === expandedView) {
        closeExpandedView();
    }
    
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    if (event.target === fullscreenOverlay) {
        closeFullscreen();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
    changeLanguage(savedLanguage);
});

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    
    document.querySelectorAll("[data-lang]").forEach(element => {
        element.style.display = element.getAttribute("data-lang") === lang ? "block" : "none";
    });

    document.getElementById("btn-es").classList.toggle("active", lang === "es");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
}

// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const formData = new FormData(this);

    // Enviar datos a un servidor (ejemplo con Formspree)
    fetch('https://formspree.io/f/xzzdaeqe', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado con éxito.');
            this.reset(); // Limpiar el formulario
        } else {
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje.');
    });
});


