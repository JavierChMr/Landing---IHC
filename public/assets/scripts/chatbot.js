const LS_KEY = "safertech_chats_v1";
const LS_CURRENT = "safertech_current_v1";

const chatWindow = document.getElementById("chatWindow");
const mensajeInput = document.getElementById("mensaje");
const sendBtn = document.getElementById("sendBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const listPanel = document.getElementById("listPanel");
const sidebarUser = document.getElementById("sidebarUser");
const starBtn = document.getElementById("starCurrent");
const deleteBtn = document.getElementById("deleteChat");
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

const userBox = document.getElementById("userBox");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");

let chats = [];
let currentChatId = null;

// UTILIDADES
function uid() {
    return "c_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function saveAll() {
    localStorage.setItem(LS_KEY, JSON.stringify(chats));
    localStorage.setItem(LS_CURRENT, currentChatId);
}
function loadAll() {
    try {
        chats = JSON.parse(localStorage.getItem(LS_KEY)) || [];
        currentChatId = localStorage.getItem(LS_CURRENT) || null;
    } catch (e) {
        chats = [];
        currentChatId = null;
    }
}
function escapeHtml(s) {
    if (!s) return "";
    return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

// NUEVO: enviar respuesta especial del bot sin interferir
function enviarRespuestaBot(texto) {
    if (!currentChatId) createNewChat();
    const chat = chats.find(c => c.id === currentChatId);

    chat.messages.push({
        who: "bot",
        text: texto,
        ts: Date.now()
    });

    saveAll();
    renderCurrentChat();
}

// CREAR CHAT
function createNewChat() {
    const id = uid();
    const chat = {
        id,
        title: "Chat sin título",
        messages: [],
        fav: false,
        created: Date.now()
    };

    chats.unshift(chat);
    currentChatId = id;
    saveAll();
    renderCurrentChat();
}

// RENDERIZAR CHAT
function renderCurrentChat() {
    const chat = chats.find(c => c.id === currentChatId);

    chatWindow.innerHTML = "";

    if (!chat) {
        showWelcome();
        starBtn.textContent = "☆";
        return;
    }

    starBtn.textContent = chat.fav ? "★" : "☆";

    if (chat.messages.length === 0) {
        showWelcome();
        return;
    }

    hideWelcome();

    chat.messages.forEach(m => appendMessageToWindow(m.text, m.who));

    setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 30);
}

function showWelcome() {
    welcomeScreen.style.display = "block";
    chatWindow.style.display = "block";
    chatWindow.innerHTML = "";
}
function hideWelcome() {
    welcomeScreen.style.display = "none";
    chatWindow.style.display = "block";
}

function appendMessageToWindow(text, who) {
    const wrapper = document.createElement("div");
    wrapper.className = "message " + (who === "user" ? "user" : "bot");

    const p = document.createElement("div");
    p.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");
    wrapper.appendChild(p);

    chatWindow.appendChild(wrapper);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// ENVIAR MENSAJE (ARREGLADO)
function enviarMensaje() {

    const text = mensajeInput.value.trim();
    if (!text) return;

    // ⛔ Verificar si es un comando de voz o texto
    const handled = procesarComandoDeVoz(text);
    if (handled) {
        mensajeInput.value = "";
        return; // ← Detiene aquí para que NO responda "Interesante..."
    }

    // Si NO es comando → mensaje normal
    if (!currentChatId) createNewChat();
    const chat = chats.find(c => c.id === currentChatId);
    if (!chat) return;

    chat.messages.push({ who: "user", text, ts: Date.now() });

    if (chat.title === "Chat sin título" && text.length > 2) {
        chat.title = text.length > 28 ? text.slice(0, 28) + "..." : text;
    }

    saveAll();
    renderCurrentChat();
    mensajeInput.value = "";

    // Respuesta normal del bot
    setTimeout(() => {
        const botResp = getBotResponse(text);
        chat.messages.push({ who: "bot", text: botResp, ts: Date.now() });
        saveAll();
        renderCurrentChat();
    }, 500);
}


// RESPUESTAS NORMALES DEL BOT
function getBotResponse(text) {
    const t = (text || "").toLowerCase();

    if (t.includes("hola") || t.includes("buenas")) {
        return "¡Hola! Soy SaferTech. Puedo analizar, comparar o traducir código.";
    }
    if (t.includes("anali") || t.includes("error") || t.includes("bug")) {
        return "Puedo analizar tu código. Envíamelo.";
    }
    if (t.includes("compara") || t.includes("diferencia")) {
        return "Envíame ambos códigos y los comparo.";
    }
    if (t.includes("tradu") || t.includes("convert")) {
        return "¿De qué lenguaje a cuál deseas traducir?";
    }

    return "Interesante. ¿Quieres analizarlo, compararlo o traducirlo?";
}

// COMANDOS RÁPIDOS
function accionRapida(tipo) {
    if (!currentChatId) createNewChat();
    const chat = chats.find(c => c.id === currentChatId);

    const map = {
        analizar: "Quiero analizar código",
        comparar: "Quiero comparar código",
        traducir: "Quiero traducir código"
    };

    chat.messages.push({ who: "user", text: map[tipo], ts: Date.now() });
    saveAll();
    renderCurrentChat();
    hideWelcome();

    setTimeout(() => {
        if (tipo === "analizar") chat.messages.push({ who: "bot", text: "Perfecto, envía el código.", ts: Date.now() });
        if (tipo === "comparar") chat.messages.push({ who: "bot", text: "Envíame ambos códigos.", ts: Date.now() });
        if (tipo === "traducir") chat.messages.push({ who: "bot", text: "¿De qué lenguaje a cuál?", ts: Date.now() });

        saveAll();
        renderCurrentChat();
    }, 350);
}

// PANEL DE CHATS
function openListPanel(type) {
    listPanel.innerHTML = "";
    listPanel.style.display = "block";
    listPanel.setAttribute("aria-hidden", "false");

    const items = type === "fav" ? chats.filter(c => c.fav) : chats;

    if (items.length === 0) {
        const empty = document.createElement("div");
        empty.className = "list-item";
        empty.innerHTML = `<div class="list-item-title">No hay elementos.</div>`;
        listPanel.appendChild(empty);
        return;
    }

    items.forEach(c => {
        const it = document.createElement("div");
        it.className = "list-item";

        it.innerHTML = `
            <div style="flex:1; overflow:hidden;">
                <div class="list-item-title">${escapeHtml(c.title)}</div>
                <div class="meta">${new Date(c.created).toLocaleString()}</div>
            </div>
            <button class="open-btn" data-id="${c.id}">Abrir</button>
        `;

        it.querySelector(".open-btn").addEventListener("click", (ev) => {
            ev.stopPropagation();
            openChatById(c.id);
            closeListPanel();
        });

        it.addEventListener("click", () => {
            openChatById(c.id);
            closeListPanel();
        });

        listPanel.appendChild(it);
    });
}

function closeListPanel() {
    listPanel.style.display = "none";
    listPanel.setAttribute("aria-hidden", "true");
}

function openChatById(id) {
    const c = chats.find(x => x.id === id);
    if (!c) return;

    chats = chats.filter(x => x.id !== id);
    chats.unshift(c);

    currentChatId = id;
    saveAll();
    renderCurrentChat();

    sidebar.classList.remove("open");
}

// FAVORITOS Y BORRAR
function toggleFavoriteCurrent() {
    const chat = chats.find(c => c.id === currentChatId);
    if (!chat) return;

    chat.fav = !chat.fav;
    saveAll();
    renderCurrentChat();
}

function deleteCurrent() {
    if (!currentChatId) return;
    const idx = chats.findIndex(c => c.id === currentChatId);
    if (idx === -1) return;

    if (!confirm("¿Eliminar este chat?")) return;

    chats.splice(idx, 1);

    currentChatId = chats.length ? chats[0].id : null;

    saveAll();
    renderCurrentChat();
}

function goAjustes() {
    window.location.href = "ajustes.html";
}

// EVENTOS
document.getElementById("btnNuevo").addEventListener("click", () => {
    createNewChat();
    closeListPanel();
});

document.getElementById("btnFavoritos").addEventListener("click", () => openListPanel("fav"));
document.getElementById("btnHistorial").addEventListener("click", () => openListPanel("hist"));
document.getElementById("btnAjustes").addEventListener("click", goAjustes);

sendBtn.addEventListener("click", enviarMensaje);
mensajeInput.addEventListener("keydown", e => { if (e.key === "Enter") enviarMensaje(); });

document.querySelectorAll(".pill").forEach(b => {
    b.addEventListener("click", ev => {
        const action = ev.target.dataset.action;
        accionRapida(action);
        hideWelcome();
    });
});

starBtn.addEventListener("click", toggleFavoriteCurrent);
deleteBtn.addEventListener("click", deleteCurrent);

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

document.addEventListener("click", e => {

    if (!e.target.closest(".sidebar") &&
        !e.target.closest("#btnFavoritos") &&
        !e.target.closest("#btnHistorial")) {
        closeListPanel();
    }

    if (!e.target.closest("#userBox") && !e.target.closest("#userMenu")) {
        if (userMenu) {
            userMenu.style.display = "none";
            userMenu.setAttribute("aria-hidden", "true");
        }
    }
});

userBox.addEventListener("click", (ev) => {
    ev.stopPropagation();
    if (!userMenu) return;
    const shown = userMenu.getAttribute("aria-hidden") === "false";
    if (shown) {
        userMenu.style.display = "none";
        userMenu.setAttribute("aria-hidden", "true");
    } else {
        userMenu.style.display = "block";
        userMenu.setAttribute("aria-hidden", "false");
    }
});

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        window.location.href = "login.html";
    });
}

loadAll();

if (!chats.length) {
    createNewChat();
} else {
    if (!currentChatId) currentChatId = chats[0].id;
    renderCurrentChat();
}

sidebarUser.textContent = "admin1";
if (userMenu) userMenu.setAttribute("aria-hidden", "true");
closeListPanel();

// VOZ ───────────────────────────────────────────

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.continuous = false;

    recognition.onresult = (event) => {
        const texto = event.results[0][0].transcript;
        console.log("Usuario dijo:", texto);

        mensajeInput.value = texto;
        enviarMensaje();
    };

    recognition.onerror = (e) => {
        console.warn("Error de reconocimiento de voz:", e);
    };
}

document.getElementById("voiceBtn")?.addEventListener("click", () => {
    if (!recognition) return alert("Tu navegador no soporta reconocimiento de voz.");
    recognition.start();
});

// ───────────────────────────────────────────
// PROCESAR COMANDOS POR VOZ O TEXTO
// ───────────────────────────────────────────
function procesarComandoDeVoz(texto) {
    const t = texto.toLowerCase();

    // ───────────────────────────────
    // ✔ COMANDO: INFO DE USUARIO
    // ───────────────────────────────
    if (t.includes("quiero saber mi informacion") || 
        t.includes("quiero saber mi información")) {

        const infoUsuario = `
📄 Información de usuario
• Nombre: admin1
• Correo: admin1@safertech.com
• Rol: Estudiante
• Estado: Activo
        `.trim();

        enviarRespuestaBot(infoUsuario);
        return true; // ← Indica que SÍ se manejó aquí
    }

    // ───────────────────────────────
    // ✔ COMANDO: CAMBIAR LENGUAJE
    // ───────────────────────────────
    const lenguajes = ["python", "javascript", "java", "c++", "php", "c#", "go", "rust"];

    const activarCambio =
        t.includes("cambiar lenguaje") ||
        t.includes("cambiar el lenguaje") ||
        t.includes("lenguaje predeterminado") ||
        t.includes("establecer lenguaje") ||
        t.includes("setear lenguaje");

    if (activarCambio) {

        const lenguajeEncontrado = lenguajes.find(lang =>
            t.includes(lang)
        );

        if (!lenguajeEncontrado) {
            enviarRespuestaBot("No reconocí el lenguaje. Lenguajes válidos: Python, JavaScript, Java, C++, PHP, C#, Go, Rust.");
            return true;
        }

        localStorage.setItem("lenguaje_predeterminado", lenguajeEncontrado);

        enviarRespuestaBot(`El lenguaje predeterminado ha sido cambiado a **${lenguajeEncontrado}**.`);
        return true;
    }

    // ❌ No era un comando
    return false;
}



