const  ul = document.getElementById('numbers-list');
const randomNumbers = [];
randomNumbers.length = 5;
for(let i = 0; i < 5; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 100) + 1;
    const li = document.createElement('li');
    const textNode = document.createTextNode(randomNumbers[i]);
    li.appendChild(textNode);
    ul.appendChild(li);
}
