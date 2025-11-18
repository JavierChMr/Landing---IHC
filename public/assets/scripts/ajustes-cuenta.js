
const botones = document.querySelectorAll('.menu-btn');


botones.forEach(boton => {
    boton.addEventListener('click', () => {

 
        botones.forEach(b => b.classList.remove('active'));

 
        boton.classList.add('active');
    });
});
