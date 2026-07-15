const form = document.querySelector('form');
const email = document.querySelector('input');
const errorMessage = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
    /*
        e is the event object. It's automatically passed by the browser to the callback function whenever the event fires. It contians information and methods about the event that just happened.
     */

    e.preventDefault();

    console.log('Submit fired');

    let isValid = true;

    console.log(e.type);
    console.log(e.target);
    console.log(e.timeStamp);

    console.log('Variables check results');
    console.log(form);
    console.log(email);
    console.log(errorMessage);

    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*
        ^[^\s@]+@[^\s@]+\.[^\s@]+$ is a Regular Expression shortened as regex or regexp. It's a pttern used to match or validate strings. Here it validates the bsic shape of an email: something@something.something
        In JavaScript it is used with te method test: emailRegex.
    */
    errorMessage.classList.add('hidden');
    email.classList.remove('error');

    if ((emailValue === '') || (!emailRegex.test(emailValue))){
        errorMessage.textContent = 'Please provid a valid email address';
        errorMessage.classList.remove('hidden');
        email.classList.add('error');
        console.log(email);
        console.log('The class of the email', email.classList);
        isValid = false;
        return
    }

    if (isValid){
        console.log('The email is valid');
    }
});