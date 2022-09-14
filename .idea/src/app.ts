import {Dices} from "./render/dices.js"
import {Player} from "./players/players.js"
import {addNextThrowButton} from "./render/nextThrowButton.js"
import { throwDice } from "./diceLogic/throwingDice.js"
import { count } from "./diceLogic/count.js"
import { numberOfChecked } from "./diceLogic/validators.js"

const firstThrowButton: HTMLButtonElement = document.querySelector('#firstThrow');
const nextThrowButton: HTMLButtonElement = document.querySelector('#nextThrow');
const mainButtons: Element = document.querySelector('#mainButtons');
const result: HTMLSpanElement = document.querySelector('#resultZero')
const player1DiceContainers: HTMLDivElement = document.querySelector('#player1Cube')
const player2DiceContainers: HTMLDivElement = document.querySelector('#player2Cube')

const player1 = new Player(player1DiceContainers);

let playiningPlayer: HTMLDivElement = player1.elements;
let gameResult: number = 0;

result.innerText = gameResult.toString();

console.log("hello")

const diceElement = new Dices();

const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        // const firstThrow = throwDice(0);
        const firstThrow = [3, 5, 1, 3, 3];
        // const firstThrow = [3, 5, 1, 1, 1];
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


                // if (gameResult >= 25){
                //     nextThrowButton.style.display = '';
                // } else {
                //     nextThrowButton.style.display = 'none';
                // }
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

start();
nextThrow();