import { Dices } from "./render/dices.js";
import { addNextThrowButton } from "./render/nextThrowButton.js";
import { throwDice } from "./diceLogic/throwingDice.js";
const firstThrow = document.querySelector('#firstThrow');
const mainButtons = document.querySelector('#mainButtons');
const player1DiceContainers = document.querySelector('#player1Cube');
const player2DiceContainers = document.querySelector('#player2Cube');
let playiningPlayer = player1DiceContainers;
let gameResult = 0;
console.log("hello");
const diceElement = new Dices();
const start = () => {
    firstThrow.addEventListener('click', (event) => {
        const firstThrow = throwDice(0);
        diceElement.createDiceElem(firstThrow, playiningPlayer);
        mainButtons.append(addNextThrowButton());
    });
};
const nextThrow = () => {
};
start();
