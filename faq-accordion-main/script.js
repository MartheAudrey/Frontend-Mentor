let questions = document.querySelectorAll(".faq__question");

questions.forEach(question => {
    const button = question.querySelector("button");
    const answer = question.parentElement.querySelector(".faq__answer");
    const icon = question.querySelector("img");

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
});