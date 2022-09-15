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
            let value = this.createSpan(diceNumbers[i]);
            this.addMultipleAndGoodNumberClass(diceNumbers[i], multiplesArr, dice);
            this.values.push(value);
            dice.append(value);
            player.append(dice);
        }
    }
    addMultipleAndGoodNumberClass(diceNumber, multiples, dice) {
        dice.disabled = true;
        if (diceNumber == multiples[0]) {
            dice.classList.add("multiple", "goodNumber");
            dice.disabled = false;
            this.multiplesDice.push(dice);
        }
        if (diceNumber === 1 || diceNumber === 5) {
            dice.classList.add("goodNumber");
            dice.disabled = false;
        }
    }
    createSpan(diceNumber) {
        const value = document.createElement("span");
        value.innerText = diceNumber.toString();
        return value;
    }
    ;
    insertNewNumbers(diceNumbers, player) {
        let multiplesArr = checkMultipleNumber(diceNumbers);
        let numberId = 0;
        for (let i = 0; i < 5; i++) {
            if (player[i].parentElement.classList.contains('checked')) {
            }
            else {
                player[i].innerText = diceNumbers[numberId].toString();
                // @ts-ignore
                let parentElement = player[i].parentElement;
                this.addMultipleAndGoodNumberClass(diceNumbers[numberId], multiplesArr, parentElement);
                numberId++;
            }
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
    beforeAllChecked() {
        for (let v of this.values) {
            if (v.parentElement.classList.contains('checked')) {
                v.parentElement.classList.add('immutable');
            }
            else {
                v.textContent = '';
                v.parentElement.classList.remove('multiple', 'goodNumber');
            }
        }
    }
}
