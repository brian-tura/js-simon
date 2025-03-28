// Creo i puntatori
const ul = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const countdown = document.getElementById('countdown');
const btn = document.querySelector('button');
const message = document.getElementById('message');
const input = document.querySelectorAll('input');

// Creo i numeri da memorizzare
const randomNumbers = [];
randomNumbers.length = 5;
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 50) + 1;
    const li = document.createElement('li');
    const textNode = document.createTextNode(randomNumbers[i]);
    li.appendChild(textNode);
    ul.appendChild(li);
}

// Creo il countdown
let i = 0;
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

// Pulsante input
btn.addEventListener("click", function () {
    event.preventDefault();

    // Verifico le risposte
    const answers = [];
    let corrette = 0;
    for (let j = 0; j < 5; j++) {
        answers.push(input[j].value);

        if (answers[j] == randomNumbers[j]) {
            corrette += 1;
            input[j].style.backgroundColor = "green";
        }
        else {
            input[j].style.backgroundColor = "red";
        }
    }

    // Visualizzo le risposte corrette
    message.innerHTML = corrette + " risposte su 5 corrette!";
});



