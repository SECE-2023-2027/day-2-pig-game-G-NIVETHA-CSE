const newGame = document.getElementById('roll');
const rollDice = document.getElementById('rollDice');
const hold = document.getElementById('hold');
const dice = document.getElementById('dice');
const player0Score = document.getElementById('score--0');
const player1Score = document.getElementById('score--1');
const player0Current = document.getElementById('current--0');
const player1Current = document.getElementById('current--1');

let activePlayer = 0;
let current0Score = 0;
let current1Score = 0;
let total0Score = 0;
let total1Score = 0;

const rollDiceFunc = () => {
    const random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `${random}.jpg`;
    dice.style.display = 'block';
    if (random !== 1) {
        if (activePlayer === 0) {
            current0Score += random;
            total0Score += random;
            player0Current.textContent = current0Score;
            checkWinner();
        } else {
            current1Score += random;
            total1Score += random;
            player1Current.textContent = current1Score;
            checkWinner();
        }
    } else {
        switchPlayer();
    }
};

const switchPlayer = () => {
    if(activePlayer === 0){
        activePlayer = 1;
        current0Score = 0;
        player0Current.textContent = current0Score;    
        player0Score.textContent = total0Score;  
    }else {
        activePlayer = 0;
        current1Score = 0;
        player1Current.textContent = current1Score;
        player1Score.textContent = total1Score;
    }

}

const newGames = () => {
    dice.style.display = 'none';
    activePlayer = 0;
    current0Score = 0;
    current1Score = 0;
    total0Score = 0;
    total1Score = 0;
    player0Current.textContent = current0Score;
    player1Current.textContent = current1Score;
    player0Score.textContent = total0Score;
    player1Score.textContent = total1Score;
};

const checkWinner = () => {
    if(total0Score >= 100){
        player0Score.textContent = "Winner";
        setTimeout(newGames, 2000);
    }
    else if(total1Score >= 100){
        player1Score.textContent = "Winner";
        setTimeout(newGames, 2000);
    }
}

rollDice.addEventListener('click', rollDiceFunc);

hold.addEventListener('click', switchPlayer);

newGame.addEventListener('click', newGames);

