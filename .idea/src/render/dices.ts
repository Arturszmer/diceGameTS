import { checkMultipleNumber } from "../diceLogic/throwingDice.js"

export class Dices {
    constructor() {}

    createDiceElem(diceNumbers: number[], player: Element){
        let index: number = 0;
        const arrayWithMultiple: number[] = checkMultipleNumber(diceNumbers);
        console.log(arrayWithMultiple, 'multiples')
        for (let i = 0; i < diceNumbers.length; i++){
            const dice: HTMLButtonElement = document.createElement("button");
            const value: HTMLSpanElement = document.createElement("span");
            dice.classList.add('cubeValue');
            dice.disabled = true;
            dice.id = `player-${index}`;
            index++;
            if (diceNumbers[i] == arrayWithMultiple[0]){
                dice.classList.add("multiple", "goodNumber");
                dice.disabled = false;
            }
            if (diceNumbers[i] === 1 || diceNumbers[i] === 5){
                dice.classList.add("goodNumber");
                dice.disabled = false;
            }
            value.innerText = diceNumbers[i].toString();
            dice.append(value);
            dice.addEventListener('click', (event) => {
                this.checkDices(dice, player)
                console.log(this.count(dice, arrayWithMultiple));
            })
            player.append(dice);
        }
    }

    private checkDices(dice: HTMLButtonElement, player: Element){
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
    count(checked: Element, multiplesArray: number[]){
        let value: number = 0;
        if (multiplesArray.length >= 3 && multiplesArray[0] == 1){
            value += multiplesArray[0] * 10 * (multiplesArray.length - 2) * 10;
        } else if (multiplesArray.length >= 3){
            value += multiplesArray[0] * 10 * (multiplesArray.length - 2);
        }
        if (multiplesArray.indexOf(1) !== -1 || multiplesArray.indexOf(5) !== -1){

        } else if (parseInt(checked.children[0].textContent) == 1){
            value += 10;
        } else if (parseInt(checked.children[0].textContent) == 5){
            value += 5;
        }
        return value;
    }

}
