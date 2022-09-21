import { Dices } from "./render/dices.js";
import { Player } from "./players/players.js";
import { throwDice } from "./diceLogic/throwingDice.js";
import { count } from "./diceLogic/count.js";
import { numberOfChecked, posibilityToSavePoints, allNumbersChecked, checkGoodNumber } from "./diceLogic/validators.js";
const firstThrowButton = document.querySelector('#firstThrow');
const nextThrowButton = document.querySelector('#nextThrow');
const savePointsButton = document.querySelector('#saveButton');
const nextPlayerButton = document.querySelector('#nextPlayer');
const mainButtons = document.querySelector('#mainButtons');
const result = document.querySelector('#resultZero');
const player1DiceContainers = document.querySelector('#player1Cube');
const player1Points = document.querySelector('#player1Points');
const player2DiceContainers = document.querySelector('#player2Cube');
const player2Points = document.querySelector('#player2Points');
const player1 = new Player(player1DiceContainers);
const player2 = new Player(player2DiceContainers);
let player = player1;
// let playiningPlayer: HTMLDivElement = player.elements;
let playerPoints = player1Points;
let gameResult = 0;
result.innerText = gameResult.toString();
console.log("hello");
let diceElement = new Dices();
const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        const firstThrow = throwDice(0);
        // const firstThrow = [3, 5, 1, 1, 1];
        // const firstThrow = [6, 6, 2, 4, 3];
        console.log(firstThrow);
        console.log(player, 'player');
        if (player.elements.style.display === 'none') {
            player.elements.style.display = '';
            console.log(player.elements.children[0].children, 'player elements children');
            diceElement.insertNewNumbers(firstThrow, diceElement.values);
            checkGoodNumber(player, nextPlayerButton);
            firstThrowButton.style.display = 'none';
        }
        else {
            diceElement.createDiceElem(firstThrow, player.elements);
            checkGoodNumber(player, nextPlayerButton);
            firstThrowButton.style.display = 'none';
            for (let button of player.elements.children) {
                button.addEventListener('click', (event) => {
                    diceElement.checkDices(button, player.elements);
                    if (button.classList.contains("checked")) {
                        gameResult += count(button, diceElement.multiplesDice);
                    }
                    else {
                        gameResult -= count(button, diceElement.multiplesDice);
                    }
                    result.innerText = gameResult.toString();
                    numberOfChecked(player.elements) > 0 ? nextThrowButton.style.display = '' : nextThrowButton.style.display = 'none';
                    posibilityToSavePoints(gameResult, player, savePointsButton);
                });
            }
        }
    });
};
const nextThrow = () => {
    nextThrowButton.addEventListener('click', (event) => {
        const nThrow = throwDice(numberOfChecked(player.elements));
        // const nThrow = [6, 6, 6, 4, 4];
        diceElement.multiplesDice = [];
        allNumbersChecked(nThrow, player.elements, diceElement);
        diceElement.beforeAllChecked();
        diceElement.insertNewNumbers(nThrow, diceElement.values);
        console.log(numberOfChecked(player.elements), 'number of checked');
        // const nThrow = [6, 6, 6, 4];
        console.log(nThrow, 'next throw');
    });
};
const savePoints = () => {
    savePointsButton.addEventListener('click', (event) => {
        player.setPoints = gameResult;
        gameResult = 0;
        result.innerText = 0..toString();
        playerPoints.innerText = player.getPoints.toString();
        diceElement.clearNumbersInDices();
        // player.elements.remove();
        playerChange();
        console.log(player.elements, 'save next');
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
        // diceElement = new Dices();
    });
};
const nextPlayer = () => {
    nextPlayerButton.addEventListener('click', (event) => {
        gameResult = 0;
        result.innerText = 0..toString();
        diceElement.clearNumbersInDices();
        // for (let i = 0; i < player.elements.children.length + 1; i++){
        //     player.elements.removeChild(player.elements.lastChild)
        // }
        console.log(player.elements, 'before player next');
        playerChange();
        console.log(player.elements, 'player next');
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
        nextPlayerButton.style.display = 'none';
        // diceElement = new Dices();
    });
};
function playerChange() {
    if (player === player1) {
        player1DiceContainers.style.display = 'none';
        player = player2;
    }
    else if (player === player2) {
        player2DiceContainers.style.display = 'none';
        console.log(player.elements, 'in method, player 2');
        player = player1;
    }
}
start();
savePoints();
nextThrow();
nextPlayer();
