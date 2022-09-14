export const posibilityToNextThrow = () => {
};
export const numberOfChecked = (playiningPlayer) => {
    let numb = 0;
    for (let i = 0; i < playiningPlayer.children.length; i++) {
        if (playiningPlayer.children[i].classList.contains('checked')) {
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
