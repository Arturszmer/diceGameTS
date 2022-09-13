import { checkMultipleNumber } from "../diceLogic/throwingDice.js";
export class Dices {
    constructor() {
        this.points = 0;
        this.multiples = [];
    }
    createDiceElem(diceNumbers, player) {
        let index = 0;
        this.multiples = checkMultipleNumber(diceNumbers);
        console.log(this.multiples, 'multiples');
        for (let i = 0; i < diceNumbers.length; i++) {
            const dice = document.createElement("button");
            const value = document.createElement("span");
            dice.classList.add('cubeValue');
            dice.disabled = true;
            dice.id = `player-${index}`;
            index++;
            if (diceNumbers[i] == this.multiples[0]) {
                dice.classList.add("multiple", "goodNumber");
                dice.disabled = false;
            }
            if (diceNumbers[i] === 1 || diceNumbers[i] === 5) {
                dice.classList.add("goodNumber");
                dice.disabled = false;
            }
            value.innerText = diceNumbers[i].toString();
            dice.append(value);
            player.append(dice);
        }
    }
    checkDices(dice, player) {
        dice.classList.toggle('checked');
        if (dice.classList.contains('checked') && dice.classList.contains('multiple')) {
            for (let i = 0; i < player.children.length; i++) {
                if (player.children[i].classList.contains('multiple')) {
                    player.children[i].classList.add('checked');
                }
            }
        }
        else if (!dice.classList.contains('checked') && dice.classList.contains('multiple')) {
            for (let i = 0; i < player.children.length; i++) {
                if (player.children[i].classList.contains('multiple')) {
                    player.children[i].classList.remove('checked');
                }
            }
        }
    }
}
