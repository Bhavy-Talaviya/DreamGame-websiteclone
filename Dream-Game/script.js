const menuToggle = document.querySelector('.menu-toggle');
const navText = document.querySelector('.nav-text');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navText.classList.toggle('active');
});

document.querySelectorAll('.nav-text a').forEach(n => n.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navText.classList.remove('active');
}));
