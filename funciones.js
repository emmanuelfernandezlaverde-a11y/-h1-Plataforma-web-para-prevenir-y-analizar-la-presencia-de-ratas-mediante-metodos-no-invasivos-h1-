
/* ==========================================================================
       1. FORMULARIO DE AVISTAMIENTO
       ========================================================================== */
const formulario = document.querySelector("#form-avistamiento");
const mensajeExito = document.querySelector("#mensaje-exito");
const inputFecha = document.querySelector("#fecha");
const inputHora = document.querySelector("#hora");

if (inputFecha && !inputFecha.value) {
    inputFecha.value = new Date().toISOString().split('T')[0];
}

if (inputHora && !inputHora.value) {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    inputHora.value = `${horas}:${minutos}`;
}

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        mensajeExito.classList.remove("hidden");
        mensajeExito.scrollIntoView({ behavior: "smooth", block: "nearest" });

        setTimeout(() => {
            formulario.reset();
            if (inputFecha) inputFecha.value = new Date().toISOString().split('T')[0];
        }, 1200);
    });
}

/* ==========================================================================
   2. MENÚ HAMBURGUESA
   ========================================================================== */
const menuToggle = document.querySelector("#menu-toggle");
const headerNav = document.querySelector("header nav");
const menuIcon = menuToggle ? menuToggle.querySelector(".menu-icon") : null;
const closeIcon = menuToggle ? menuToggle.querySelector(".close-icon") : null;

if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = headerNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (menuIcon && closeIcon) {
            menuIcon.style.display = isOpen ? "none" : "inline-flex";
            closeIcon.style.display = isOpen ? "inline-flex" : "none";
        }
    });

    headerNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            headerNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            if (menuIcon && closeIcon) {
                menuIcon.style.display = "inline-flex";
                closeIcon.style.display = "none";
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!headerNav.contains(e.target) && !menuToggle.contains(e.target)) {
            headerNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            if (menuIcon && closeIcon) {
                menuIcon.style.display = "inline-flex";
                closeIcon.style.display = "none";
            }
        }
    });
}



// <!-- ==========================================================================
//      JAVASCRIPT: mostrar/ocultar contraseña + demo de envío
//      ========================================================================== -->
const toggleBtn = document.querySelector("#toggle-password");
const passInput = document.querySelector("#password");
const formLogin = document.querySelector("#form-login");
const mensaje = document.querySelector("#mensaje-login");
const eyeOpen = document.querySelector("#icon-eye-open");
const eyeClosed = document.querySelector("#icon-eye-closed");

// Mostrar / ocultar contraseña
if (toggleBtn && passInput) {
    toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const isPassword = passInput.type === "password";
        passInput.type = isPassword ? "text" : "password";
        eyeOpen.style.display = isPassword ? "none" : "block";
        eyeClosed.style.display = isPassword ? "block" : "none";
    });
}

// Envío de demostración (no recarga la página)
if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        mensaje.classList.remove("hidden");
        mensaje.scrollIntoView({ behavior: "smooth", block: "nearest" });

        setTimeout(() => {
            formLogin.reset();
            passInput.type = "password";
            eyeOpen.style.display = "block";
            eyeClosed.style.display = "none";
        }, 1600);
    });
}