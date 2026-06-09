const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const errorSign = document.getElementById('error-sign');
const errorMessage = document.querySelector('.error-message');
const button = document.querySelector('button');

console.log('Script loaded');

console.log(form);
console.log(emailInput);
console.log(errorSign);
console.log(errorMessage);

form.addEventListener('submit', (e) => {
     console.log('Submit event fired');
    e.preventDefault();

    /* This line gets the value entered in the input and removes the whitespace at the beginning and end. */
    const email = emailInput.value.trim();
    

    if (email === ""){
        errorSign.classList.remove('hidden');
        errorMessage.textContent = 'Please provide an email adress';
        errorMessage.classList.remove('hidden');
        emailInput.classList.add('error');
        return; //Stops the function immediately once an error has been found. The code will not continue to verify the format of the input.
    }

    //This line creates a regular expression (regex) used to check whether a string looks like a valid email adress.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*
        ^ Start with a string
        [^\s@] One or more characters that are not a space (\s) and not @
        @ the symbol @
        [^\s@] One or more charcaters after @
        \. a literal dot (.)
        [^\s@] One or more characters after the dot
        $ End of the string
     */

        if (!emailRegex.test(email)){
            errorMessage.textContent = 'Please provide a valid email';
            errorMessage.classList.remove('hidden');
            errorSign.classList.remove('hidden');
            emailInput.classList.add('error');
            return
        }

        errorMessage.classList.add('hidden');
        errorSign.classList.add('hidden');
        emailInput.classList.remove('error');
        form.submit();
})