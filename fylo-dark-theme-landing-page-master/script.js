const errorMessage = document.getElementById('email-error');
const emailInput = document.querySelector('input');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector("form");

/* 
    The form's event 'submit' fires when the user clicks on the submit button and presses Enter in the email field.
*/
console.log('Script loaded');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stops the page from reloading
    const emailValue = emailInput.value.trim();
    if (emailValue === "" || !emailRegex.test(emailValue)){
        errorMessage.textContent = "Please enter a valid email address";
        console.log(getComputedStyle(errorMessage).display);
        
    } else {
        errorMessage.textContent = "";
    }
})
