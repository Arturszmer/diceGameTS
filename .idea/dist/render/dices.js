import { checkMultipleNumber } from "../diceLogic/throwingDice.js";
export class Dices {
    constructor() {
        this.points = 0;
        this.multiplesDice = [];
        this.values = [];
    }
    createDiceElem(diceNumbers, player) {
        let index = 0;
        let multiplesArr = checkMultipleNumber(diceNumbers);
        for (let i = 0; i < diceNumbers.length; i++) {
            const dice = document.createElement("button");
            dice.classList.add('cubeValue');
            dice.disabled = true;
            dice.id = `player-${index}`;
            index++;
            let value = this.insertDiceNumbers(diceNumbers[i]);
            if (diceNumbers[i] == multiplesArr[0]) {
                dice.classList.add("multiple", "goodNumber");
                dice.disabled = false;
                this.multiplesDice.push(dice);
            }
            if (diceNumbers[i] === 1 || diceNumbers[i] === 5) {
                dice.classList.add("goodNumber");
                dice.disabled = false;
            }
            this.values.push(value);
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
    insertDiceNumbers(diceNumber) {
        const value = document.createElement("span");
        value.innerText = diceNumber.toString();
        return value;
    }
    ;
}
