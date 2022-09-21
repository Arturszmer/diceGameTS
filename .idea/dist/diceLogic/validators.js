export const numberOfChecked = (playingPlayer) => {
    let numb = 0;
    for (let i = 0; i < playingPlayer.children.length; i++) {
        if (playingPlayer.children[i].classList.contains('checked')) {
            numb++;
        }
    }
    return numb;
};
export const posibilityToSavePoints = (gameResult, playerPoints, savePointsButton) => {
    if (playerPoints.getPoints >= 100) {
        gameResult >= 25 ? savePointsButton.style.display = '' : savePointsButton.style.display = 'none';
    }
    else {
        gameResult >= 100 ? savePointsButton.style.display = '' : savePointsButton.style.display = 'none';
    }
};
export const allNumbersChecked = (throwNumbers, playingPlayer, diceElement) => {
    if (numberOfChecked(playingPlayer) === 5) {
        for (let dice of diceElement.values) {
            dice.innerText = '';
            dice.parentElement.classList.remove('checked', 'immutable', 'multiple', 'goodNumber');
        }
        diceElement.insertNewNumbers(throwNumbers, diceElement.values);
    }
};
export const checkGoodNumber = (player, nextPlayerButton) => {
    let check = true;
    for (let element of player.elements.children) {
        if (element.classList.contains('goodNumber') && !element.classList.contains('immatable')) {
            console.log(element.classList);
            check = false;
        }
    }
    if (check) {
        nextPlayerButton.style.display = '';
    }
};
