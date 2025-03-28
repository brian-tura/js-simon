// Creo i numeri da memorizzare
const ul = document.getElementById('numbers-list');
const randomNumbers = [];
randomNumbers.length = 5;
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
    const li = document.createElement('li');
    const textNode = document.createTextNode(randomNumbers[i]);
    li.appendChild(textNode);
    ul.appendChild(li);
}
// Inizializzo il form
const form = document.getElementById('answers-form');

// Creo il countdown
const countdown = document.getElementById('countdown');
let i = 5;
showCountDown = setInterval(function () {
    countdown.innerHTML = i;
    i--;
   
}, 1000);

