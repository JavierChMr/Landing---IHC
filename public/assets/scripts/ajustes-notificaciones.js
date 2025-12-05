
// Aplicar modo guardado para evitar parpadeos
const modoGuardado = localStorage.getItem("modo");

if (modoGuardado) {
    document.documentElement.style.setProperty('--bg',
        modoGuardado === "oscuro" ? "#000000" : "#05345c"
    );
    document.documentElement.style.setProperty('--sidebar',
        modoGuardado === "oscuro" ? "#111111" : "#03243f"
    );
    document.documentElement.style.setProperty('--text-color', "white");
}

