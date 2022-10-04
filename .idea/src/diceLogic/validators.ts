import { Player } from "../players/players";
import { Dices } from "../render/dices";

export const numberOfChecked = (playingPlayer: HTMLDivElement) => {
    let numb: number = 0;
    for (let i = 0; i < playingPlayer.children.length; i++){
        if (playingPlayer.children[i].classList.contains('checked') && !playingPlayer.children[i].classList.contains('immutable')){
            numb++;
        }
    }
    return numb;
}

export const numberOfImmutable = (playingPlayer: HTMLDivElement) => {
    let numb: number = 0;
    for (let i = 0; i < playingPlayer.children.length; i++){
        if (playingPlayer.children[i].classList.contains('checked')){
            numb++;
        }
    }
    return numb;
}

export const posibilityToSavePoints = (gameResult: number, playerPoints: Player, savePointsButton: HTMLButtonElement) => {
    if (playerPoints.getPoints >= 100) {
        gameResult >= 25 ? savePointsButton.style.display = '' : savePointsButton.style.display = 'none';
    } else {
        gameResult >= 100 ? savePointsButton.style.display = '' : savePointsButton.style.display = 'none';
    }
}

export const allNumbersChecked = (throwNumbers: number[], playingPlayer: HTMLDivElement, diceElement: Player) => {
    if (numberOfImmutable(playingPlayer) === 5){
        for (let dice of diceElement.dices.values){
            dice.innerText = '';
            dice.parentElement.classList.remove('checked', 'immutable', 'multiple', 'goodNumber');
        }
        diceElement.dices.insertNewNumbers(throwNumbers, diceElement.dices.values);
        diceElement.dices.multiplesDice = [];
    }
}

export const checkGoodNumber = (player: Player,
                                nextPlayerButton: HTMLButtonElement,
                                nextThrowButton: HTMLButtonElement,
                                saveButton: HTMLButtonElement) => {
    let check: boolean = true;
    for (let element of player.elements.children){
        if (element.classList.contains('goodNumber') && !element.classList.contains('immutable')){
            check = false;
        }
    }
    if (check){

        nextPlayerButton.style.display = '';
        nextThrowButton.style.display = 'none';
        saveButton.style.display = 'none';
    }
}

export const winnerValidator = (player: Player,
                                gameResult: number,
                                winButton: HTMLButtonElement,
                                nextPlayerButton: HTMLButtonElement,
                                nextThrowButton: HTMLButtonElement,
                                saveButton: HTMLButtonElement) => {
    if (player.getPoints + gameResult === 1000) {
        winButton.style.display = '';
        nextThrowButton.style.display = 'none';
        nextPlayerButton.style.display = 'none';
    } else if (player.getPoints + gameResult > 1000) {
        nextPlayerButton.style.display = '';
        nextThrowButton.style.display = 'none';
        saveButton.style.display = 'none'
        winButton.style.display = 'none';
    }
}
