document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let usuario = document.getElementById("nombre").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    let errores = [];
    let boxErrores = document.getElementById("errores");
    boxErrores.innerHTML = "";


    if (usuario.length < 2) {
        errores.push("El usuario debe tener al menos 2 caracteres.");
    }


    if (contrasena.length < 12) {
        errores.push("La contraseña debe tener al menos 12 caracteres.");
    }


    if (errores.length > 0) {
        errores.forEach(error => {
            let p = document.createElement("p");
            p.textContent = error;
            p.style.color = "red";
            p.style.margin = "5px 0";
            boxErrores.appendChild(p);
        });
        return;
    }


    if (usuario === "admin1" && contrasena === "administrador12345") {
        alert("Inicio de sesión exitoso");
        window.location.href = "chatbot.html"; 
    } else {
        let p = document.createElement("p");
        p.textContent = "Credenciales incorrectas.";
        p.style.color = "red";
        boxErrores.appendChild(p);
    }
});




document.getElementById("btnGoogle").addEventListener("click", (e) => {
    e.preventDefault();

});

document.getElementById("btnApple").addEventListener("click", (e) => {
    e.preventDefault();

});
