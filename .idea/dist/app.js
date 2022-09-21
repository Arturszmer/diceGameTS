import { Dices } from "./render/dices.js";
import { Player } from "./players/players.js";
import { throwDice } from "./diceLogic/throwingDice.js";
import { count } from "./diceLogic/count.js";
import { numberOfChecked, posibilityToSavePoints, allNumbersChecked, checkGoodNumber, numberOfImmutable } from "./diceLogic/validators.js";
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
const player1 = new Player(new Dices(), player1DiceContainers);
const player2 = new Player(new Dices(), player2DiceContainers);
let player = player1;
let playerPoints = player1Points;
let gameResult = 0;
result.innerText = gameResult.toString();
const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        const firstThrow = throwDice(0);
        // const firstThrow = [3, 5, 1, 1, 1];
        // const firstThrow = [6, 6, 2, 4, 3];
        if (player.elements.style.display === 'none') {
            player.elements.style.display = '';
            player.dices.insertNewNumbers(firstThrow, player.dices.values);
            checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
            firstThrowButton.style.display = 'none';
        }
        else {
            player.dices.createDiceElem(firstThrow, player.elements);
            checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
            firstThrowButton.style.display = 'none';
            for (let button of player.dices.dices) {
                button.addEventListener('click', (event) => {
                    player.dices.checkDices(button, player.elements);
                    if (button.classList.contains("checked")) {
                        gameResult += count(button, player.dices.multiplesDice);
                    }
                    else {
                        gameResult -= count(button, player.dices.multiplesDice);
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
        const nThrow = throwDice(numberOfImmutable(player.elements));
        // const nThrow = [5];
        player.dices.multiplesDice = [];
        allNumbersChecked(nThrow, player.elements, player);
        player.dices.beforeAllChecked();
        player.dices.insertNewNumbers(nThrow, player.dices.values);
        checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
    });
};
const savePoints = () => {
    savePointsButton.addEventListener('click', (event) => {
        player.addPoints(gameResult);
        gameResult = 0;
        result.innerText = 0..toString();
        playerPoints.innerText = player.getPoints.toString();
        player.dices.clearNumbersInDices();
        playerChange();
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
    });
};
const nextPlayer = () => {
    nextPlayerButton.addEventListener('click', (event) => {
        gameResult = 0;
        result.innerText = 0..toString();
        player.dices.clearNumbersInDices();
        playerChange();
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
        nextPlayerButton.style.display = 'none';
    });
};
function playerChange() {
    if (player === player1) {
        player1DiceContainers.style.display = 'none';
        player = player2;
        playerPoints = player2Points;
    }
    else if (player === player2) {
        player2DiceContainers.style.display = 'none';
        player = player1;
        playerPoints = player1Points;
    }
}
start();
savePoints();
nextThrow();
nextPlayer();
