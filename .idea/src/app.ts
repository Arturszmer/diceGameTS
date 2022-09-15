import {Dices} from "./render/dices.js"
import {Player} from "./players/players.js"
import { throwDice } from "./diceLogic/throwingDice.js"
import { count } from "./diceLogic/count.js"
import {numberOfChecked, posibilityToSavePoints, allNumbersChecked, checkGoodNumber} from "./diceLogic/validators.js"

const firstThrowButton: HTMLButtonElement = document.querySelector('#firstThrow');
const nextThrowButton: HTMLButtonElement = document.querySelector('#nextThrow');
const savePointsButton: HTMLButtonElement = document.querySelector('#saveButton');
const nextPlayerButton: HTMLButtonElement = document.querySelector('#nextPlayer');
const mainButtons: Element = document.querySelector('#mainButtons');
const result: HTMLSpanElement = document.querySelector('#resultZero')
const player1DiceContainers: HTMLDivElement = document.querySelector('#player1Cube')
const player1Points: HTMLDivElement = document.querySelector('#player1Points')
const player2DiceContainers: HTMLDivElement = document.querySelector('#player2Cube')

const player1 = new Player(player1DiceContainers);
const player2 = new Player(player2DiceContainers);

let player: Player = player1;
let playiningPlayer: HTMLDivElement = player.elements;
let playerPoints: HTMLDivElement = player1Points;
let gameResult: number = 0;

result.innerText = gameResult.toString();

console.log("hello")

let diceElement = new Dices();

const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        // const firstThrow = throwDice(0);
        const firstThrow = [3, 5, 1, 1, 1];
        // const firstThrow = [6, 6, 2, 4, 3];
        console.log(firstThrow)
        console.log(player, 'player?')
        diceElement.createDiceElem(firstThrow, playiningPlayer);
        checkGoodNumber(player, nextPlayerButton);
        firstThrowButton.style.display = 'none';
        for (let button of playiningPlayer.children){
            button.addEventListener('click', (event) => {
                diceElement.checkDices(button, playiningPlayer);
                if (button.classList.contains("checked")){
                    gameResult += count(button, diceElement.multiplesDice);
                } else {
                    gameResult -= count(button, diceElement.multiplesDice);
                }
                result.innerText = gameResult.toString();
                numberOfChecked(playiningPlayer) > 0 ? nextThrowButton.style.display = '' : nextThrowButton.style.display = 'none';
                posibilityToSavePoints(gameResult, player, savePointsButton);
            })
        }
    })
}

const nextThrow = () => {
    nextThrowButton.addEventListener('click', (event) => {
        const nThrow = throwDice(numberOfChecked(playiningPlayer))
        // const nThrow = [6, 6, 6, 4, 4];
        diceElement.multiplesDice = [];
        allNumbersChecked(nThrow, playiningPlayer, diceElement);
        diceElement.beforeAllChecked();
        diceElement.insertNewNumbers(nThrow, diceElement.values);

        console.log(numberOfChecked(playiningPlayer), 'number of checked')
        // const nThrow = [6, 6, 6, 4];
        console.log(nThrow, 'next throw')

    })
}


const savePoints = () => {
    savePointsButton.addEventListener('click', (event) => {
        player.setPoints = gameResult;
        gameResult = 0;
        result.innerText = 0 .toString();
        playerPoints.innerText = player.getPoints.toString();
        player.elements.remove();
        playiningPlayer = player.elements;
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
        diceElement = new Dices();
    })
}

const nextPlayer = () => {
    nextPlayerButton.addEventListener('click', (event) => {
        gameResult = 0;
        result.innerText = 0 .toString();
        player.elements.remove();
        playerChange();
        playiningPlayer = player.elements;
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
        nextPlayerButton.style.display = 'none';
        diceElement = new Dices();
    })
}

function playerChange() {
    if (player === player1) {
        player = player2;
    } else if (player === player2) {
        player = player1;
    }
}

start();
nextThrow();
savePoints();
nextPlayer();