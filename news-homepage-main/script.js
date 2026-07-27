const body = document.querySelector('body');
const openMenu = document.getElementsByClassName('hamburger');
const closeMenu = document.getElementsByClassName('xmark');
const sidebar = document.getElementsByClassName('sidebar');

const showSidebar = () => {
    sidebar[0].style.display = 'block';
    body.style.backgroundColor = 'hsl(233, 8%, 79%)';
};

const hideSidebar = () => {
    sidebar[0].style.display = 'none';
    body.style.backgroundColor = 'hsl(36, 100%, 99%)';
}