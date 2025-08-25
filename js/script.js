let navbar = document.querySelector('.nav .menu');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
