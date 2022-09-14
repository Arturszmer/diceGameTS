import { Player } from "../players/players";

export const posibilityToNextThrow = () => {

}

export const numberOfChecked = (playiningPlayer: HTMLDivElement) => {
    let numb: number = 0;
    for (let i = 0; i < playiningPlayer.children.length; i++){
        if (playiningPlayer.children[i].classList.contains('checked')){
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