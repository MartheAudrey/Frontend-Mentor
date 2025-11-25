
# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](/Screenshot%202025-11-21%20at%2015-57-44%20Frontend%20Mentor%20NFT%20preview%20card%20component.png)

### Links

- Solution URL: [Frontend - Mentor repository](https://github.com/MartheAudrey/Frontend-Mentor.git)
- Live Site URL: [NFT preview card component](https://frontend-mentor-theta-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```css
.modalities p:first-child::before, 
.modalities p:last-child::before{
    content: "";
    display: inline-block;
    margin-right: 5px;
    background-repeat: no-repeat;
}

.modalities p:first-child::before{
    height: 18px;
    width: 16px;
    background-image: url(images/icon-ethereum.svg);
}

.modalities p:last-child::before{
    height: 18px;
    width: 18px;
    background-image: url(images/icon-clock.svg);
}
```
#### How to place an icon before a text
I used *::before* pseudo-element. It is used to insert content before the actual contant of an element in the rendered, without modifying the HTML structure.

```css
.image-wrapper{
    position: relative;
    cursor: pointer;
    height: 250px;
    
}

.image-wrapper::after{
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(images/icon-view.svg);
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease;
}

.image-wrapper:hover::after{
    opacity: 1;
    background-color: hsla(178, 100%, 50%, 0.432);
}
```
#### How to get the hover effect over the principal image of the card component
1. I created a div *.image-wrapper* with *position:absolute*, the reference point for my future absolutely positioned element.
2. I inserted inside it the image *icon-view.svg* with *position:absolute* as a pseudo-element which covers the entire surface of the *image-wrapper* and is invisible.
3. I changed the opacity of the pseudo-element to 1 and gave it a transparent background color. 

### Continued development

I want to continue to llearn how to play with CSS an get cool design effects.

### Useful resources

- [before pseudo-element](https://www.w3schools.com/cssref/sel_before.php) - This helped me to understand how to use pseudo-elements.
- [NFT Preview by Mr Coder](https://www.youtube.com/watch?v=l6sxh57ifSQ&t=336s) - This video helped me 
- []

## Author

- Frontend Mentor - [MartheA_19](https://www.frontendmentor.io/profile/MartheAudrey)


