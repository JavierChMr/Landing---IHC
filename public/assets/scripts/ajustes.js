// ajustes.js (versión final y corregida)

// ----- SELECTORES PRINCIPALES -----
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

const userBox = document.getElementById("userBox");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");

const pills = Array.from(document.querySelectorAll(".pill"));
const searchInput = document.querySelector(".search-bar input");


// ======================================================
//        CUADRO DE RESPUESTA (CREAR SI NO EXISTE)
// ======================================================
let responseBox = document.querySelector(".response-box");
let responseText = document.getElementById("responseText");

if (!responseBox) {
    const settingsContent = document.querySelector(".settings-content") || document.body;

    responseBox = document.createElement("div");
    responseBox.className = "response-box";
    responseBox.setAttribute("aria-live", "polite");

    responseText = document.createElement("p");
    responseText.id = "responseText";
    responseBox.appendChild(responseText);

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.textContent = "Cerrar";
    closeBtn.style.cssText =
        "position:absolute;right:12px;top:10px;background:transparent;border:none;color:#fff;cursor:pointer;";
    closeBtn.addEventListener("click", () => {
        responseBox.style.display = "none";
    });

    responseBox.style.position = "relative";
    responseBox.appendChild(closeBtn);

    const searchBar = document.querySelector(".search-bar");
    if (searchBar && searchBar.parentElement) {
        searchBar.parentElement.insertBefore(responseBox, searchBar.nextSibling);
    } else {
        settingsContent.appendChild(responseBox);
    }

    responseBox.style.display = "none";
}


// ======================================================
//               SIDEBAR MÓVIL
// ======================================================
if (hamburger) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}


// ======================================================
//           USER MENU + LOGOUT
// ======================================================
if (userBox && userMenu) {
    userBox.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const hidden = userMenu.getAttribute("aria-hidden") === "true";
        userMenu.setAttribute("aria-hidden", hidden ? "false" : "true");
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        window.location.href = "login.html";
    });
}


// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
    if (!e.target.closest("#userBox") && !e.target.closest("#userMenu")) {
        if (userMenu) userMenu.setAttribute("aria-hidden", "true");
    }
});


// ======================================================
//             FUNCIONES RÁPIDAS DE LAS PILLS
// ======================================================
function showResponse(text) {
    if (!responseBox || !responseText) return;
    responseText.textContent = text;
    responseBox.style.display = "block";
    responseBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function hideResponse() {
    if (!responseBox) return;
    responseBox.style.display = "none";
}

hideResponse();


if (pills.length >= 3) {
    const [btnAnalizar, btnComparar, btnTraducir] = pills;

    btnAnalizar.addEventListener("click", () => {
        showResponse("Analiza el siguiente código y dime posibles errores:");
    });

    btnComparar.addEventListener("click", () => {
        showResponse("Compara estos dos fragmentos de código y explica sus diferencias:");
    });

    btnTraducir.addEventListener("click", () => {
        showResponse("Traduce el siguiente código a otro lenguaje (indica origen y destino):");
    });
}











