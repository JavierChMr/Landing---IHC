const preguntas = document.querySelectorAll(".faq-box");

preguntas.forEach(box => {

    // Ahora el click es sobre TODA la caja
    box.addEventListener("click", () => {

        const answer = box.querySelector(".faq-answer");
        const icon = box.querySelector(".icon");

        const isOpen = answer.style.display === "block";

        // Alternar estado
        answer.style.display = isOpen ? "none" : "block";
        icon.textContent = isOpen ? "+" : "−";

    });

});
