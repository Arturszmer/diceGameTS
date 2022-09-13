import { Dices } from "./render/dices.js";
import { count } from "./diceLogic/count.js";
const firstThrowButton = document.querySelector('#firstThrow');
const nextThrowButton = document.querySelector('#nextThrow');
const mainButtons = document.querySelector('#mainButtons');
const result = document.querySelector('#resultZero');
const player1DiceContainers = document.querySelector('#player1Cube');
const player2DiceContainers = document.querySelector('#player2Cube');
let playiningPlayer = player1DiceContainers;
let gameResult = 0;
result.innerText = gameResult.toString();
console.log("hello");
const diceElement = new Dices();
const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        // const firstThrow = throwDice(0);
        const firstThrow = [3, 5, 1, 3, 3];
        // const firstThrow = [3, 5, 1, 1, 1];
        diceElement.createDiceElem(firstThrow, playiningPlayer);
        firstThrowButton.style.display = 'none';
        for (let button of playiningPlayer.children) {
            button.addEventListener('click', (event) => {
                diceElement.checkDices(button, playiningPlayer);
                if (button.classList.contains("checked")) {
                    gameResult += count(button, diceElement.multiplesDice);
                }
                else {
                    gameResult -= count(button, diceElement.multiplesDice);
                }
                result.innerText = gameResult.toString();
                if (gameResult >= 25) {
                    nextThrowButton.style.display = '';
                }
                else {
                    nextThrowButton.style.display = 'none';
                }
            });
        }
    });
};
const nextRound = () => {
};
start();
