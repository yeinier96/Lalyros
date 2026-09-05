//Seleccionamos el boton
const hamburgerBtn =document.getElementById('hamburger-btn');

//Agregamos un evento de clic
hamburgerBtn.addEventListener('click',() => {
hamburgerBtn.classList.toggle('active');
});