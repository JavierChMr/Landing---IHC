function inicializarPersonalizacion() {

    // Obtener elementos SOLO cuando existan en el DOM cargado
    const modoSelect = document.getElementById("modoSelect");
    const iconSizeSelect = document.getElementById("iconSizeSelect");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const logoutBtn = document.getElementById("logoutBtn");
    const userBox = document.getElementById("userBox");
    const userMenu = document.getElementById("userMenu");
    const backArrow = document.getElementById("backArrow");

    // Si NO es la página personalización → salir
    if (!modoSelect || !iconSizeSelect || !fontSizeSelect) return;

    // ------------------- CARGAR PREFERENCIAS -------------------
    function cargarPreferencias() {
        const modo = localStorage.getItem("modo") || "claro";
        const iconSize = localStorage.getItem("iconSize") || "mediano";
        const fontSize = localStorage.getItem("fontSize") || "mediano";

        modoSelect.value = modo;
        iconSizeSelect.value = iconSize;
        fontSizeSelect.value = fontSize;

        aplicarModo(modo);
        aplicarIconSize(iconSize);
        aplicarFontSize(fontSize);
    }

    // ------------------- APLICAR MODO -------------------
    function aplicarModo(modo) {
        if (modo === "oscuro") {
            document.documentElement.style.setProperty('--bg', '#000000');
            document.documentElement.style.setProperty('--sidebar', '#111111');
            document.documentElement.style.setProperty('--text-color', 'white');
        } else {
            document.documentElement.style.setProperty('--bg', '#05345c');
            document.documentElement.style.setProperty('--sidebar', '#03243f');
            document.documentElement.style.setProperty('--text-color', 'white');
        }
    }

    // ------------------- TAMAÑO ICONOS -------------------
    function aplicarIconSize(size) {
        let px = "28px";
        if (size === "pequeño") px = "20px";
        if (size === "mediano") px = "28px";
        if (size === "grande") px = "36px";
        document.documentElement.style.setProperty('--icon-size', px);
    }

    // ------------------- TAMAÑO FUENTE -------------------
    function aplicarFontSize(size) {
        let px = "17px";
        if (size === "pequeño") px = "14px";
        if (size === "mediano") px = "17px";
        if (size === "grande") px = "22px";
        document.documentElement.style.setProperty('--font-size', px);
    }

    // ------------------- EVENTOS -------------------
    modoSelect.addEventListener("change", e => {
        aplicarModo(e.target.value);
        localStorage.setItem("modo", e.target.value);
    });

    iconSizeSelect.addEventListener("change", e => {
        aplicarIconSize(e.target.value);
        localStorage.setItem("iconSize", e.target.value);
    });

    fontSizeSelect.addEventListener("change", e => {
        aplicarFontSize(e.target.value);
        localStorage.setItem("fontSize", e.target.value);
    });

    // ------------------- MENÚ USUARIO -------------------
    if (userBox) {
        userBox.addEventListener("click", () => {
            if (!userMenu) return;
            const shown = userMenu.getAttribute("aria-hidden") === "false";
            userMenu.style.display = shown ? "none" : "block";
            userMenu.setAttribute("aria-hidden", shown ? "true" : "false");
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    // ------------------- BOTÓN VOLVER -------------------
    if (backArrow) {
        backArrow.addEventListener("click", () => {
            document.getElementById("content-area").innerHTML = "";
            document.getElementById("chatBox").style.display = "block";
        });
    }

    // Carga inicial
    cargarPreferencias();
}


// Detectar cuando se cargue contenido dinámico
document.addEventListener("DOMContentLoaded", inicializarPersonalizacion);

// Ejecutar también cuando ajustes.js inserte HTML dinámico
document.addEventListener("contentLoaded", inicializarPersonalizacion);
