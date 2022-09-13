import { Dices } from "./render/dices.js";
import { count } from "./diceLogic/count.js";
const firstThrow = document.querySelector('#firstThrow');
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
    firstThrow.addEventListener('click', (event) => {
        // const firstThrow = throwDice(0);
        const firstThrow = [3, 5, 1, 1, 1];
        diceElement.createDiceElem(firstThrow, playiningPlayer);
        for (let button of playiningPlayer.children) {
            button.addEventListener('click', (event) => {
                diceElement.checkDices(button, playiningPlayer);
                if (button.classList.contains("checked")) {
                    gameResult += count(button, diceElement.multiples);
                }
                else {
                    gameResult -= count(button, diceElement.multiples);
                }
                result.innerText = gameResult.toString();
            });
        }
    });
};
const nextThrow = () => {
};
start();
