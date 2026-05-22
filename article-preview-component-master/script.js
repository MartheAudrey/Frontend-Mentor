const shareButton = document.querySelector('.article-card__share-button');
const shareMenu = document.querySelector(".article-card__share-menu");
const authorDetails = document.querySelector(".article-card__author");
const footer = document.querySelector(".article-card__footer");



shareButton.addEventListener('click', () => {
    const isDesktop = window.innerWidth >= 768;
    shareMenu.classList.toggle('hidden');
    
    if(!isDesktop){
        authorDetails.classList.toggle('hidden');
        footer.classList.toggle('article-card__footer-active');
    }

    shareButton.classList.toggle('article-card__share-button--active');
});