const menuButton = document.querySelector("button");
const mobileMenu = document.querySelector("sidebar")

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})