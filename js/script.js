// Creo i numeri da memorizzare
const ul = document.getElementById('numbers-list');
const randomNumbers = [];
randomNumbers.length = 5;
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 50) + 1;
    const li = document.createElement('li');
    const textNode = document.createTextNode(randomNumbers[i]);
    li.appendChild(textNode);
    ul.appendChild(li);
}

// Inizializzo il form
const form = document.getElementById('answers-form');

// Creo il countdown
const countdown = document.getElementById('countdown');
let i = 1;
showCountDown = setInterval(function () {
    countdown.innerHTML = i;
    i--;
    if (i == -1) {
        ul.classList.add('d-none');
        countdown.classList.add('d-none');
        clearInterval(showCountDown);
        form.classList.remove('d-none');
    }
}, 1000);

// Inizializzo il pulsante di input
const btn = document.querySelector('button');
btn.addEventListener("click", function() {
    event.preventDefault();

    // Verifico le risposte
    const answers = [];
    let corrette = 0;
    for (let j = 0; j < 5; j++) {
        answers.push(document.querySelector(`input:nth-child(${j + 1})`).value);

        if (answers[j] == randomNumbers[j]) {
            corrette += 1;
        }
    }

    // Visualizzo le risposte corrette
});



