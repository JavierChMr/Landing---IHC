
const modo = localStorage.getItem("modo") || "claro";
const iconSize = localStorage.getItem("iconSize") || "mediano";
const fontSize = localStorage.getItem("fontSize") || "mediano";


function aplicarModo(modo){
    if(modo === "oscuro"){
        document.documentElement.style.setProperty('--bg', '#000000');
        document.documentElement.style.setProperty('--sidebar', '#111111');
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--bg', '#05345c');
        document.documentElement.style.setProperty('--sidebar', '#03243f');
        document.documentElement.style.setProperty('--text-color', 'white');
    }
}


function aplicarIconSize(size){
    let px = "28px";
    if(size === "pequeño") px = "20px";
    if(size === "mediano") px = "28px";
    if(size === "grande") px = "36px";
    document.documentElement.style.setProperty('--icon-size', px);
}


function aplicarFontSize(size){
    let px = "17px";
    if(size === "pequeño") px = "14px";
    if(size === "mediano") px = "17px";
    if(size === "grande") px = "22px";
    document.documentElement.style.setProperty('--font-size', px);
}


aplicarModo(modo);
aplicarIconSize(iconSize);
aplicarFontSize(fontSize);
