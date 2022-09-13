export const addNextThrowButton = () => {
    const nextThrowButton = document.createElement('button');
    nextThrowButton.classList.add("btn", "btn-warning", "btn-lg");
    nextThrowButton.id = 'nextRound';
    nextThrowButton.innerText = 'Next Throw!';
    return nextThrowButton;
};
