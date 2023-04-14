const card = document.querySelectorAll('.card__inner');
console.log('tessst: ', card[0])
const card1 = card[0];
const card2 = card[1]
card1.addEventListener('click', function() {
    card1.classList.toggle('is-flipped');
});

card2.addEventListener('click', function() {
    card2.classList.toggle('is-flipped');
});
