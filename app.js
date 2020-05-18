const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let  score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition = null;
let timerId, moleId;

const randomSquare = () => {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
};

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
            id.classList.remove('mole');
        }
    })
});

const moveMole = () => {
    moleId = null;
    moleId = setInterval(randomSquare, 1000);
};

const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(moleId);
        alert('GAME OVER!');
    }
};

timerId = setInterval(countDown, 1000);
moveMole();