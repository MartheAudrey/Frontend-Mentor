# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./Frontend%20Mentor%20Intro%20component%20with%20sign%20up%20form%20-%20Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Based on my HTML structure I had to find a way to check the value of the form inputs. I learned it was possible, instead of checking every input seperately, to select and loop through their containers to access them.

```js
    formGroups.forEach(group => {
        const input = group.querySelector('input');
        console.log('Input', input);
        const errorIcon = group.querySelector('.error-icon');
        console.log('Icon', errorIcon)
        const errorMessage = group.nextElementSibling;
        console.log('Message', errorMessage);

        if (input.value.trim() === ''){
            errorIcon.classList.remove('hidden');
            errorMessage.textContent = `${input.placeholder} cannot be empty`;
            errorMessage.classList.remove('hidden');
            group.classList.add('error');
            isValid = false;
            console.log('Fields are empty.')
            return;
        } 

        errorMessage.classList.add('hidden');
        errorIcon.classList.add('hidden');
        group.classList.remove('error');

        console.log(input.name, input.type);

        if(input.name === 'email'){
            
            console.log(input.type, input.value.trim());

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log('Checking email...');

            if(!emailRegex.test(input.value.trim())){
                errorIcon.classList.remove('hidden');
                errorMessage.textContent = 'Looks like this is not an email';
                console.log(errorMessage.textContent);
                errorMessage.classList.remove('hidden');
                group.classList.add('error');
                isValid = false;
            }

        }
    });
```

### Continued development

My next goal is to become proficient in JavaScript.

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)


