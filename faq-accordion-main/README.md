# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [FAQ GitHub subfolder]()
- Live Site URL: [FAQ accordion]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

This challenge gave me the opportunity to learn how to build a FAQ accordion using JavaScript. Adding event listeners was key to showing and hiding the answers to each question.

```
```js
button.addEventListener('click', () => {
        const isOpen = question.classList.contains('active');
        if(isOpen){
            answer.style.maxHeight = '0';
            question.classList.remove('active');
            button.style.marginBottom = '0';
            icon.src = "/assets/images/icon-plus.svg";
        }
        else{
            button.style.marginBottom = '1.5rem';
            answer.style.maxHeight = answer.scrollHeight + 'px';
            question.classList.add('active');
            icon.src = "/assets/images/icon-minus.svg";
        }
    });
```

### Continued development

In future projects, I would like to continue improving my JavaScript skills, particularly in building interactive components. I also plan to focus on writing cleaner and more maintainable code by organizing my logic more effectively.

On the CSS side, I want to deepen my understanding of layout techniques (Flexbox and Grid), responsive design, and writing cleaner, more maintainable styles. I also aim to improve accessibility by ensuring that interactive components are usable for all users.

### Useful resources

- [Building a Simple FAQ Accordion with HTML, CSS, and JavaScript by Francesco Saviano](https://medium.com/@francesco-saviano/building-a-simple-faq-accordion-with-html-css-and-javascript-2a8aed32badf) - This helped me to understand the approach to take to build a FAQ accordion.

## Author

- Frontend Mentor - [@MartheA_19](https://www.frontendmentor.io/profile/MartheAudrey)

