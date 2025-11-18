// ajustes.js (actualizado)
// - Sidebar móvil
// - Menú de usuario / logout
// - Funciones rápidas (Analizar / Comparar / Traducir)
// - Cuadro de respuesta (se muestra SOLO en el cuadro, NO en la barra blanca)

// ----- SELECTORES -----
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

const userBox = document.getElementById("userBox");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");

const pills = Array.from(document.querySelectorAll(".pill"));
const searchInput = document.querySelector(".search-bar input");

// Intentamos obtener el cuadro de respuesta; si no existe, lo creamos
let responseBox = document.querySelector(".response-box");
let responseText = document.getElementById("responseText");

if (!responseBox) {
    // insertar después de .search-bar dentro de la .settings-content (si existe)
    const settingsContent = document.querySelector(".settings-content") || document.body;

    responseBox = document.createElement("div");
    responseBox.className = "response-box";
    responseBox.setAttribute("aria-live", "polite");

    // contenido interno
    responseText = document.createElement("p");
    responseText.id = "responseText";
    responseBox.appendChild(responseText);

    // botón pequeño para cerrar el cuadro (opcional y usable)
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.textContent = "Cerrar";
    closeBtn.style.cssText = "position:absolute;right:12px;top:10px;background:transparent;border:none;color:#fff;cursor:pointer;";
    closeBtn.addEventListener("click", () => {
        responseBox.style.display = "none";
    });
    // contenedor relativo para que el close quede visible
    responseBox.style.position = "relative";
    responseBox.appendChild(closeBtn);

    // insertar después de la search-bar si existe, sino al final del main content
    const searchBar = document.querySelector(".search-bar");
    if (searchBar && searchBar.parentElement) {
        searchBar.parentElement.insertBefore(responseBox, searchBar.nextSibling);
    } else {
        settingsContent.appendChild(responseBox);
    }

    responseBox.style.display = "none";
}

// ----- SIDEBAR MÓVIL -----
if (hamburger) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}

// ----- USER MENU / LOGOUT -----
if (userBox && userMenu) {
    userBox.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const isHidden = userMenu.getAttribute("aria-hidden") === "true";
        userMenu.setAttribute("aria-hidden", isHidden ? "false" : "true");
    });
}

// logout button (si existe)
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        // aquí puedes limpiar localStorage o hacer otras acciones si quieres
        window.location.href = "login.html";
    });
}

// cerrar popup al clicar fuera
document.addEventListener("click", (e) => {
    if (!e.target.closest("#userBox") && !e.target.closest("#userMenu")) {
        if (userMenu) userMenu.setAttribute("aria-hidden", "true");
    }
    // también cerrar listados de sidebar si estuvieran abiertos (por seguridad)
    const listPanel = document.getElementById("listPanel");
    if (listPanel && !e.target.closest(".sidebar")) {
        listPanel.style.display = "none";
        listPanel.setAttribute && listPanel.setAttribute("aria-hidden", "true");
    }
});


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



if (pills.length >= 3) {
    const [btnAnalizar, btnComparar, btnTraducir] = pills;

    btnAnalizar.addEventListener("click", () => {
        const msg = "Analiza el siguiente código y dime posibles errores:";
       
        showResponse(msg);
       
    });

    btnComparar.addEventListener("click", () => {
        const msg = "Compara estos dos fragmentos de código y explica sus diferencias:";
        showResponse(msg);
    });

    btnTraducir.addEventListener("click", () => {
        const msg = "Traduce el siguiente código a otro lenguaje (indica origen y destino):";
        showResponse(msg);
    });
}


if (searchInput) {
    searchInput.addEventListener("input", () => {
        
    });
}


hideResponse();

document.getElementById("btnCuenta").addEventListener("click", function () {

   
    document.getElementById("chat-area").style.display = "none";

    
    const contentArea = document.getElementById("content-area");
    contentArea.style.display = "block";

  
    fetch("/public/ajustes-cuenta.html")
        .then(response => response.text())
        .then(data => {

            contentArea.innerHTML = data;

            
            const cssId = "ajustesCuentaCSS";
            if (!document.getElementById(cssId)) {
                const link = document.createElement("link");
                link.id = cssId;
                link.rel = "stylesheet";
                link.href = "/public/assets/styles/ajustes-cuenta.css";
                document.head.appendChild(link);
            }

          
            const script = document.createElement("script");
            script.src = "/public/assets/scripts/ajustes-cuenta.js";
            document.body.appendChild(script);
        });
});



const personalizacionBtn = document.querySelectorAll(".menu-item")[1]; 

personalizacionBtn.addEventListener("click", () => {
    window.location.href = "personalizacion.html";
});


const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click", () => {
    window.location.href = "chatbot.html"; 
});
