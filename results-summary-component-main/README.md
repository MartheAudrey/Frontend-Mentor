# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot_Frontend%20Mentor%20Results%20summary%20component.png)

### Links

- Solution URL: [Frontend Mentor Repository](https://github.com/MartheAudrey/Frontend-Mentor.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### How to give to a container the shape of a circle

To see how you can add code snippets, see below:

```html
<div class="note__container">
  <h2>76</h2>
  <p>of 100</p>
</div>
```
```css
.note__container{
    background-image: linear-gradient(to bottom, var(--circle-color1), var(--circle-color2));
    width: 12rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin-block: 1rem;
}
```

aspect-ratio: 1/1; This instruction is the key.It forces the element  to keep equal width and height.
The combiantion bellow gives me a perfect circle.
```css

    aspect-ratio: 1/1;
    border-radius: 50%;
```

### Continued development

In future projects, I would like to learn new things on CSS. I want to write well structured qnd clean code.

### Useful resources

- [Results summary Frontend Mentor Project by Kevin Powell](https://www.youtube.com/watch?v=KqFAs5d3Yl8&list=PL4-IK0AVhVjPregcc6pgAIerVqSWaJEM4&index=3) - This helped to draw a circle.

## Author

- Frontend Mentor - [@MartheA_19](https://www.frontendmentor.io/profile/MartheAudrey)


