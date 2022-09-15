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
            let value = this.createSpan(diceNumbers[i]);
            this.addMultipleAndGoodNumberClass(diceNumbers[i], multiplesArr, dice);
            this.values.push(value);
            dice.append(value);
            player.append(dice);
        }
    }

    private addMultipleAndGoodNumberClass(diceNumber: number, multiples: number[], dice: HTMLButtonElement){
        dice.disabled = true;
        if (diceNumber == multiples[0]){
            dice.classList.add("multiple", "goodNumber");
            dice.disabled = false;
            this.multiplesDice.push(dice);
        }
        if (diceNumber === 1 || diceNumber === 5){
            dice.classList.add("goodNumber");
            dice.disabled = false;
        }
    }

    private createSpan(diceNumber: number){
        const value: HTMLSpanElement = document.createElement("span");
        value.innerText = diceNumber.toString();
        return value;
    };

    public insertNewNumbers(diceNumbers: number[], player: HTMLSpanElement[]){
        let multiplesArr: number[] = checkMultipleNumber(diceNumbers);
        let numberId: number = 0;
        for (let i = 0; i < 5; i++){
            if (player[i].parentElement.classList.contains('checked')){

            } else {
                player[i].innerText = diceNumbers[numberId].toString();
                // @ts-ignore
                let parentElement: HTMLButtonElement = player[i].parentElement;
                this.addMultipleAndGoodNumberClass(diceNumbers[numberId], multiplesArr, parentElement)
                numberId++;
            }
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

    public beforeAllChecked(){
        for (let v of this.values){
            if (v.parentElement.classList.contains('checked')){
                v.parentElement.classList.add('immutable')
            } else {
                v.textContent = '';
                v.parentElement.classList.remove('multiple', 'goodNumber')
            }
        }

    }


}
