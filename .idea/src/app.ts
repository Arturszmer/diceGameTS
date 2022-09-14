import {Dices} from "./render/dices.js"
import {Player} from "./players/players.js"
import {addNextThrowButton} from "./render/nextThrowButton.js"
import { throwDice } from "./diceLogic/throwingDice.js"
import { count } from "./diceLogic/count.js"
import { numberOfChecked, posibilityToSavePoints } from "./diceLogic/validators.js"

const firstThrowButton: HTMLButtonElement = document.querySelector('#firstThrow');
const nextThrowButton: HTMLButtonElement = document.querySelector('#nextThrow');
const savePointsButton: HTMLButtonElement = document.querySelector('#saveButton');
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

const diceElement = new Dices();

const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        // const firstThrow = throwDice(0);
        // const firstThrow = [3, 5, 1, 3, 3];
        const firstThrow = [3, 5, 1, 1, 1];
        diceElement.createDiceElem(firstThrow, playiningPlayer);
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
                // gameResult >= 25 ? savePointsButton.style.display = '' : savePointsButton.style.display = 'none';
                console.log(player.getPoints, 'punkty playera')
                posibilityToSavePoints(gameResult, player, savePointsButton);
            })
        }
    })
}

const nextThrow = () => {
    nextThrowButton.addEventListener('click', (event) => {
        const checkedDivs: number = numberOfChecked(playiningPlayer);
        const nThrow = throwDice(checkedDivs)
        console.log(nThrow, 'next throw')
        for (let v of diceElement.values){
            v.textContent = '';
        }
        // diceElement.createDiceElem()
    })
}

const savePoints = () => {
    savePointsButton.addEventListener('click', (event) => {
        player.setPoints = gameResult;
        gameResult = 0;
        result.innerText = 0 .toString();
        playerPoints.innerText = player.getPoints.toString();
        player.elements.remove();
        player = player2;
        playiningPlayer = player.elements;
        nextThrowButton.style.display = 'none';
        firstThrowButton.style.display = '';
        savePointsButton.style.display = 'none';
    })
}

start();
nextThrow();
savePoints();