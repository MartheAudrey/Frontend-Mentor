const form = document.querySelector('form');
const formGroups = document.querySelectorAll('.form-group');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('The event was fired');

    let isValid = true;


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

    if (isValid) {
        console.log('Form is valid ✔');
        form.reset();
    }
});

