export const numberOfChecked = (playingPlayer) => {
    let numb = 0;
    for (let i = 0; i < playingPlayer.children.length; i++) {
        if (playingPlayer.children[i].classList.contains('checked') && !playingPlayer.children[i].classList.contains('immutable')) {
            numb++;
        }
    }
    return numb;
};
export const numberOfImmutable = (playingPlayer) => {
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
    if (numberOfImmutable(playingPlayer) === 5) {
        for (let dice of diceElement.dices.values) {
            console.log(dice, 'dice');
            dice.innerText = '';
            dice.parentElement.classList.remove('checked', 'immutable', 'multiple', 'goodNumber');
        }
        diceElement.dices.insertNewNumbers(throwNumbers, diceElement.dices.values);
    }
};
export const checkGoodNumber = (player, nextPlayerButton, nextThrowButton) => {
    let check = true;
    for (let element of player.elements.children) {
        if (element.classList.contains('goodNumber') && !element.classList.contains('immutable')) {
            check = false;
        }
    }
    if (check) {
        nextPlayerButton.style.display = '';
        nextThrowButton.style.display = 'none';
    }
};
