const preguntas = document.querySelectorAll(".faq-box");

preguntas.forEach(box => {

    box.addEventListener("click", () => {

        const answer = box.querySelector(".faq-answer");
        const icon = box.querySelector(".icon");

        const isOpen = answer.style.display === "block";


        answer.style.display = isOpen ? "none" : "block";
        icon.textContent = isOpen ? "+" : "−";

    });

});
