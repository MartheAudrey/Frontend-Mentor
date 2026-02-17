# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./Social%20proof%20screenshot.png)

### Links

- Solution URL: [Frontend Mentor Repository](https://github.com/MartheAudrey/Frontend-Mentor.git)
- Live Site URL: [Social Proof Section Master](https://frontend-mentor-5bil.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project gqve me the opportunity to learn how to position elements inside their grid-cells horizontally and vertically using justify-self and align-self in the desktop layout.

Positioning with justify-self:
```css
  .ratings{
        display: flex;
        align-items: center;
        gap: 2rem;
        padding-inline: 2rem;
    }
  .ratings:nth-child(1){
        justify-self: start;
    }

    .ratings:nth-child(2){
        justify-self: center;
    }

    .ratings:nth-child(3){
        justify-self: end;
    }
```

Positioning with align-self:
```css
    .testimonies__container{
        grid-template-columns: repeat(3, 1fr);
        height: 250px;
        gap: 1.5rem;
    }


    .testimonies__container li:nth-child(1){
        align-self: start;
    }

    .testimonies__container li:nth-child(2){
        align-self: center;
    }

    .testimonies__container li:nth-child(3){
        align-self: end;
    }
```

### Continued development

- Semantic elements
- Accessibility
-Data attributes
-Transitions and animations
-CSS grid
-Backgrounds

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)
