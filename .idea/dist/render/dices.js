import { checkMultipleNumber } from "../diceLogic/throwingDice.js";
export class Dices {
    constructor() {
        this.points = 0;
        this.multiplesDice = [];
        this.dices = [];
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
            this.dices.push(dice);
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
        value.innerHTML = `<img src="./soundsAndImages/Dice-${diceNumber}.png" 
        width=50 height=50">`;
        value.setAttribute("data-value", diceNumber.toString());
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
                player[i].removeAttribute("data-value");
                player[i].setAttribute("data-value", diceNumbers[numberId].toString());
                // player[i].innerHTML = diceNumbers[numberId].toString();
                player[i].innerHTML = `<img src="./soundsAndImages/Dice-${diceNumbers[numberId]}.png" 
        width=50 height=50">`;
                // @ts-ignore
                let parentElement = player[i].parentElement;
                this.addMultipleAndGoodNumberClass(diceNumbers[numberId], multiplesArr, parentElement);
                numberId++;
            }
        }
    }
    clearNumbersInDices() {
        for (let numbers of this.values) {
            numbers.innerText = '';
            numbers.parentElement.classList.remove('checked', 'immutable', 'multiple', 'goodNumber');
        }
        this.multiplesDice = [];
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
        for (let i = 0; i < this.dices.length; i++) {
            if (this.dices[i].classList.contains('checked')) {
                this.dices[i].classList.add('immutable');
                this.dices[i].disabled = true;
            }
            else {
                this.dices[i].children[0].textContent = '';
                this.dices[i].classList.remove('multiple', 'goodNumber');
            }
        }
    }
}
