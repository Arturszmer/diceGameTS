import { checkMultipleNumber } from "../diceLogic/throwingDice.js"

export class Dices {
    public points: number = 0;
    public multiplesDice: HTMLButtonElement[] = [];
    public values: HTMLSpanElement[] = [];
    constructor() {}

    createDiceElem(diceNumbers: number[], player: Element){
        let index: number = 0;
        let multiplesArr: number[] = checkMultipleNumber(diceNumbers);

        for (let i = 0; i < diceNumbers.length; i++){
            const dice: HTMLButtonElement = document.createElement("button");
            dice.classList.add('cubeValue');
            dice.disabled = true;
            dice.id = `player-${index}`;
            index++;
            let value = this.insertDiceNumbers(diceNumbers[i]);
            if (diceNumbers[i] == multiplesArr[0]){
                dice.classList.add("multiple", "goodNumber");
                dice.disabled = false;
                this.multiplesDice.push(dice);
            }
            if (diceNumbers[i] === 1 || diceNumbers[i] === 5){
                dice.classList.add("goodNumber");
                dice.disabled = false;
            }
            this.values.push(value);
            dice.append(value);
            player.append(dice);
        }
    }

    public checkDices(dice: Element, player: Element){
        dice.classList.toggle('checked')
        if (dice.classList.contains('checked') && dice.classList.contains('multiple')){
            for (let i = 0; i < player.children.length; i++){
                if (player.children[i].classList.contains('multiple')){
                    player.children[i].classList.add('checked');
                }

            }
        } else if (!dice.classList.contains('checked') && dice.classList.contains('multiple')){
            for (let i = 0; i < player.children.length; i++){
                if (player.children[i].classList.contains('multiple')){
                    player.children[i].classList.remove('checked');
                }
            }
        }
    }
    insertDiceNumbers(diceNumber: number){
        const value: HTMLSpanElement = document.createElement("span");
        value.innerText = diceNumber.toString();
        return value;
    };


}
