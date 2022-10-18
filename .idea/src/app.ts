import {Dices} from "./render/dices.js"
import {Player} from "./players/players.js"
import { throwDice } from "./diceLogic/throwingDice.js"
import { count } from "./diceLogic/count.js"
import {
    numberOfChecked,
    posibilityToSavePoints,
    allNumbersChecked,
    checkGoodNumber,
    numberOfImmutable,
    winnerValidator
} from "./diceLogic/validators.js"
import { Sounds } from "./visualAndSound/sounds.js"

const firstThrowButton: HTMLButtonElement = document.querySelector('#firstThrow');
const nextThrowButton: HTMLButtonElement = document.querySelector('#nextThrow');
const savePointsButton: HTMLButtonElement = document.querySelector('#saveButton');
const nextPlayerButton: HTMLButtonElement = document.querySelector('#nextPlayer');
const winButton: HTMLButtonElement = document.querySelector('#win');
const mainButtons: Element = document.querySelector('#mainButtons');
const result: HTMLSpanElement = document.querySelector('#resultZero')
const player1DiceContainers: HTMLDivElement = document.querySelector('#player1Cube')
const player1Points: HTMLDivElement = document.querySelector('#player1Points')
const player1Name: HTMLDivElement = document.querySelector('#player1Name')
const player2DiceContainers: HTMLDivElement = document.querySelector('#player2Cube')
const player2Points: HTMLDivElement = document.querySelector('#player2Points')
const player2Name: HTMLDivElement = document.querySelector('#player2Name')
const player3DiceContainers: HTMLDivElement = document.querySelector('#player3Cube')
const player3Points: HTMLDivElement = document.querySelector('#player3Points')
const player3Name: HTMLDivElement = document.querySelector('#player3Name')
const player4DiceContainers: HTMLDivElement = document.querySelector('#player4Cube')
const player4Points: HTMLDivElement = document.querySelector('#player4Points')
const player4Name: HTMLDivElement = document.querySelector('#player4Name')

const player1 = new Player(new Dices(), player1DiceContainers, "Emilia");
const player2 = new Player(new Dices(), player2DiceContainers, "Asia");
const player3 = new Player(new Dices(), player3DiceContainers, "Artur");
const player4 = new Player(new Dices(), player4DiceContainers, "Nikt");
player1Name.append(player1.name);
player2Name.append(player2.name);
player3Name.append(player3.name);
player4Name.append(player4.name);

let player: Player = player1;
let playerPoints: HTMLDivElement = player1Points;
let gameResult: number = 0;
const sounds = new Sounds();

result.innerText = gameResult.toString();

const start = () => {
    firstThrowButton.addEventListener('click', (event) => {
        sounds.audio(5);
        sounds.throwSound.play();
        const firstThrow = throwDice(0);
        if (player.elements.style.display === 'none'){
            player.elements.style.display = '';

            player.dices.insertNewNumbers(firstThrow, player.dices.values);
            checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
            firstThrowButton.style.display = 'none';
        } else {
            player.dices.createDiceElem(firstThrow, player.elements);
            checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
            firstThrowButton.style.display = 'none';
            for (let button of player.dices.dices){
                button.addEventListener('click', (event) => {
                    player.dices.checkDices(button, player.elements);
                    if (button.classList.contains("checked")){
                        gameResult += count(button, player.dices.multiplesDice);
                    } else {
                        gameResult -= count(button, player.dices.multiplesDice);
                    }
                    result.innerText = gameResult.toString();
                    numberOfChecked(player.elements) > 0 ? nextThrowButton.style.display = '' : nextThrowButton.style.display = 'none';
                    posibilityToSavePoints(gameResult, player, savePointsButton);
                    winButton.style.display = 'none';
                    winnerValidator(player, gameResult, winButton, nextPlayerButton, nextThrowButton, savePointsButton);
                })
            }
        }


    })
}

const nextThrow = () => {
    nextThrowButton.addEventListener('click', (event) => {
        const sounds = new Sounds();
        sounds.audio(5 - numberOfImmutable(player.elements));
        sounds.throwSound.play();
        const nThrow = throwDice(numberOfImmutable(player.elements))
        nextThrowButton.style.display = 'none';
        player.dices.multiplesDice = [];
        allNumbersChecked(nThrow, player.elements, player);
        player.dices.beforeAllChecked();
        player.dices.insertNewNumbers(nThrow, player.dices.values);
        checkGoodNumber(player, nextPlayerButton, nextThrowButton, savePointsButton);
    })
}


const savePoints = () => {
        savePointsButton.addEventListener('click', (event) => {
                player.addPoints(gameResult);
                gameResult = 0;
                result.innerText = 0 .toString();
                playerPoints.innerText = player.getPoints.toString();
                player.dices.clearNumbersInDices();
                playerChange();
                nextThrowButton.style.display = 'none';
                firstThrowButton.style.display = '';
                savePointsButton.style.display = 'none';
        })
}

const nextPlayer = () => {
        nextPlayerButton.addEventListener('click', (event) => {
                gameResult = 0;
                result.innerText = 0 .toString();
                player.dices.clearNumbersInDices();
                playerChange();
                nextThrowButton.style.display = 'none';
                firstThrowButton.style.display = '';
                savePointsButton.style.display = 'none';
                nextPlayerButton.style.display = 'none';
        })
}

function playerChange() {
    switch (player){
        case player1:
            player1DiceContainers.style.display = 'none';
            player = player2;
            playerPoints = player2Points;
            break;
        case player2:
            player2DiceContainers.style.display = 'none'
            player = player3;
            playerPoints = player3Points;
            break;
        case player3:
            player3DiceContainers.style.display = 'none'
            player = player1;
            playerPoints = player1Points;
            break;
        // case player4:
        //     player4DiceContainers.style.display = 'none'
        //     player = player1;
        //     playerPoints = player1Points;
    }

    // if (player === player1) {
    //     player1DiceContainers.style.display = 'none';
    //     player = player2;
    //     playerPoints = player2Points;
    // } else if (player === player2) {
    //     player2DiceContainers.style.display = 'none'
    //     player = player1;
    //     playerPoints = player1Points;
    // }
}

const winGame = () => {
    winButton.addEventListener('click', (event) => {
        window.location.reload();
    })
}


start();
savePoints();
nextThrow();
nextPlayer();
winGame();
