# Frontend Mentor - Chat app CSS illustration solution

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

![](/Frontend%20Mentor%20Chat%20App%20CSS%20Illustration%20Screenshot.png)



### Links

- Solution URL: [Github Directory](https://github.com/MartheAudrey/Frontend-Mentor/tree/main/chat-app-css-illustration-master)
- Live Site URL: [Chat App CSS Illustration](https://chat-app-illustration-maen.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

O learned how to add shapes in the background.

```html
  <div class="bg-shape bg-shape-left"></div>
  <div class="bg-shape bg-shape-right"></div>
```

```css
  .bg-shape{
      position: fixed;
      z-index: -1;
      width: 15rem;
      height: 100vh;
      border-radius: 0 0 20rem 20rem;
  }

  .bg-shape-left{
      background-image: linear-gradient(45deg, var(--gradient-purple), var(--gradient-pink));
      left: -100px;
      top: -200px;
  }

  .bg-shape-right{
      background-color: hsl(295, 29%, 92%);
      transform: scaleY(-1);
      right: -100px;
      bottom: -200px;
  }
```

### Continued development

I would like to discover new CSS properties, inprove in writing well structured and maintainable code.

### AI Collaboration

ChatGPT helped to structure my HTML code.

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)

