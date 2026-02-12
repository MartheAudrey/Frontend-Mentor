# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Build out the project to the designs provided

### Screenshot

![](./Profile%20Card%20Component%20Screenshot.png)

### Links

- Solution URL: [Frontend Mentor Repository](https://github.com/MartheAudrey/Frontend-Mentor/tree/main)
- Live Site URL: [Profile Card Component](https://frontend-mentor-561u.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to add a background-image and position it correctly by using the following properties: background-image; background-repeat and background-position.

```css
body{
    min-height: 100vh;
    background-color: var(--blue-600);
    font-family: "Kumbh Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    font-weight: var(--regular-fw);
    background-image: url(images/bg-pattern-top.svg), url(images/bg-pattern-bottom.svg);
    background-repeat: no-repeat, no-repeat;
    background-position: right 50vw bottom 35vh, left 50vw top 40vh;
}
```

### Continued development

I would like to learn more how to use semantic HTML corretcly, right clean flexible and scalable CSS code.

### Useful resources

- [Profile Card Component by Mr Coder](https://www.youtube.com/watch?v=NZpG9EBKYWc&list=PLcZZlEf3w738Bv45a8yI_iIv2OGx_JLvz&index=4) - This video helped me to understand how to center the profile in the container. 

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)
