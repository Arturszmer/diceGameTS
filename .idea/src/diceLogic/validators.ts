import { Player } from "../players/players";
import { Dices } from "../render/dices";

export const numberOfChecked = (playingPlayer: HTMLDivElement) => {
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

export const allNumbersChecked = (throwNumbers: number[], playingPlayer: HTMLDivElement, diceElement: Dices) => {
    if (numberOfChecked(playingPlayer) === 5){
        for (let dice of diceElement.values){
            dice.innerText = '';
            dice.parentElement.classList.remove('checked', 'immutable', 'multiple', 'goodNumber');
        }
        diceElement.insertNewNumbers(throwNumbers, diceElement.values);
    }
}
