# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./Frontend%20Mentor%20Fylo%20landing%20page%20screenshot.png)


### Links

- Solution URL: [Github project folder](https://github.com/MartheAudrey/Frontend-Mentor/tree/main/fylo-dark-theme-landing-page-master)
- Live Site URL: [Fylo Dark Theme Landing Page](https://fylo-dark-theme-landing-page-maen.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to think about spacing and positioning more systematically. I made use of custom properties, Grid and Flexbox layouts and I gave each section an inner container to control the width's content on desktop layouts.


```html
  <div class="hero__content">
      <div class="container">
        <img src="./images/illustration-intro.png">
        <div class="hero__grid">
            <h1 class="hero__title">All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores all your most important files in one secure location. Access them wherever 
              you need, share and collaborate with friends family, and co-workers.
            </p>
            <button type="button">Get Started</button>
        </div>
        <picture class="decorative-section"> 
          <source media="(min-width: 700px)" srcset="./images/bg-curvy-desktop.svg">
          <img src="./images/bg-curvy-mobile.svg" alt="" role="presentation">
        </picture>
      </div>
    </div>
```
```css
  /*Spaces*/
      --space-xs: 0.5rem;
      --space-sm: 1rem;
      --space-md: 1.5rem;
      --space-lg: 2.5rem;
      --space-xl: 4rem;
      --space-2xl: 6rem;

    .container{
    max-width: 1000px;
    margin-inline: auto;
    padding-inline: var(--space-md);

    .grid-text-group{
    display: grid;
    gap: var(--space-md);
}
}
```

### Continued development

I want to learn SCSS, a preprocessor I hqve seen in mqny projects.


### AI Collaboration

I mainly used Claude AI for debugging.


## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)


