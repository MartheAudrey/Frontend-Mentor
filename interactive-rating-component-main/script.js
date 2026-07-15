const cardRating = document.getElementsByClassName('card__rating');
const cardThankYou = document.getElementsByClassName('card__thankyou');
const ratings = document.getElementsByClassName('rating');
const submitBtn = document.querySelector('button');
const score = document.getElementById('score-description');

let selectedRating = null;


//Listen to rating clicks
Array.from(ratings).forEach(rating => {
    rating.addEventListener('click', () => {
        //Remove active class from all ratings
        Array.from(ratings).forEach(r => r.classList.remove('active'));
        //Add active class to clicked rating
        rating.classList.add('active');
        //Store the selected value
        selectedRating = rating.textContent;
    });
});

//Handle the submit button
submitBtn.addEventListener('click', () =>{
    //Do nothing if no rating is selected
    if (selectedRating === null) return;
    //Update teh score description
    score.textContent = `You selected ${selectedRating} out of 5`;
    //Switch views
    cardThankYou[0].classList.remove('hidden');
    cardRating[0].classList.add('hidden');
});
