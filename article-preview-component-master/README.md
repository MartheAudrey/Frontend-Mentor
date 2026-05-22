# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](/Frontend%20Mentor%20Article%20preview%20component%20-%20Screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/MartheAudrey/Frontend-Mentor/tree/main/article-preview-component-master))
- Live Site URL: [Article preview component]((https://article-preview-component-maen.netlify.app/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project taught me how to design a share menu and how to handle its visibility.

```html
<footer class=" article-card__footer flex-group">
          <div class="article-card__author flex-group">
            <img src="./images/avatar-michelle.jpg" alt="Michelle Appleton" class="article-card__avatar">
            <div class="article-card__author-info">
              <p class="article-card__author-name">Michelle Appleton</p>
              <time datetime="2020-06-28">28 Jun 2020</time>
            </div>
          </div>
          <div class="article-card__share flex-group">
            <div class="article-card__share-menu hidden" id="share-menu">
                <span class="article-card__share-label">Share</span>
                <ul class="article-card__social-list">
                  <li><a href="#" aria-label="Share on Facebook"><i class="fa-brands fa-square-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#" aria-label="Share on Twitter"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#" aria-label="Share on Pinterest"><i class="fa-brands fa-pinterest" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <button class="article-card__share-button" aria-label="Share article" aria-expanded="false" aria-controls="share-menu"><i class="fa-solid fa-share"></i></button>
          </div>         
</footer>
```

```css
.article-card__footer{
    justify-content: space-between;
    padding: var(--space-2) var(--space-3);
}

.article-card__footer-active{
    background-color: var(--dark-grayish-blue);
    align-items: center;
    border-radius: 0 0 var(--space-1) var(--space-1);
}
```

```js
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
```

### Continued development

I would like to learn more of design patterns in frontend development and accessibility rules.


### Useful resources

- [CSS Tooltip Arrows](https://www.w3schools.com/css/css_tooltip_arrows.asp) - I learned the method to use to design an arrow for a tooltip such as a bubble ou popup. I will use this pattern moving forward.

### AI Collaboration

I used ChatGPT to help me debugg CSS and JavaScript code mainly for the active state on mobile and desktop layout.

It helped me:
- Debugg layout behavior
- refine the structure of my footer
- Understand why the approaches I had taken didn't work

## Author

- Frontend Mentor - [@MartheAudrey](ttps://www.frontendmentor.io/profile/MartheAudrey)

## Acknowledgments

- [Article Preview Component by Jarrod Ver Hey](https://www.frontendmentor.io/solutions/article-preview-component-5FUBsGMdAJ) - When I got stuck, this solution inspired me on how to structure the footer and and display the share menu on the desktop and mobile layouts.
