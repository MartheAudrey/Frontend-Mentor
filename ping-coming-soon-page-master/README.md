# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./Frontend%20Mentor%20Ping%20coming%20soon%20page%20Screenshot.png)



### Links

- Solution URL: [Ping Coming Soon Page - Github directory](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow



### What I learned

I learned new ARIA attributes: *aria-describedby, role*.

```html
<input type="email" id="email" placeholder="Your email address here..." aria-describedby="email-error" required>
```

```html
<p id="email-error" class="error-message hidden" role="alert"></p>
```

I also learned how to  selectors in CSS.

```css
main{
    padding-block: var(--space2) var(--space4);
    text-align: center;
    

    h1{
        color: var(--heading-clr);
        font-weight: 300;
        font-size: clamp(1.375rem, 1.155rem + 0.94vw, 2rem);
        margin-bottom: var(--space1);
    }

    strong{
        color: var(--txt-emphasis-clr);
        font-weight: 600;
    }


}
```

### Continued development
Learn more on accessibility, CSS and JavaScript.

### AI Collaboration

I used Claude AI to know how to add accessibility to my HTML code.

## Author

- Frontend Mentor - [@MartheAudrey](https://www.frontendmentor.io/profile/MartheAudrey)

