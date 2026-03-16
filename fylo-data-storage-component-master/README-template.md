# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor Repository](hhttps://github.com/MartheAudrey/Frontend-Mentor.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

By completing this challenge, I learned how to design a progress bar and a speech bubble using CSS.

You can see below the code snippets below :

```html
  <div class="progress-bar-container">
    <div class="progress-bar"></div>
  </div>
```
```css
.progress-bar-container{
    background-color: var(--blue950);
    padding: .2rem;
    border-radius: 50px;
    height: 25px;
}

.progress-bar{
    background: var(--gradient);
    height: 100%; /*To give height: 100% the parent container must have an explicit height*/
    width: 75%;
    border-radius: 150px;
    position: relative;
    padding: 5px;
}

.progress-bar::after{
    content: " ";
    background-color: white;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    position: absolute;
    right: 1%;
    top: 49%;
    transform: translateY(-50%);
}
```

### Continued development

In future project I would like to improve my HTML structure by writing more semantic and accessible markup. I also want to continue practicing CSS techniques for building UI components and responsive layouts, while keeping my code clean and maintainable.

### Useful resources

- [SunilParbhoo's solution](https://www.frontendmentor.io/solutions/responsive-fylo-data-storage-component-html-css-uxT7b4zsaE) This solution helped me to see how I can add the white little circle inside my progress bar.

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)

## Acknowledgments
[SunilParbhoo](https://www.frontendmentor.io/profile/SunilParbhoo)