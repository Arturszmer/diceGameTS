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
