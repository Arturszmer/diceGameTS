import { Dices } from "../render/dices";

export class Player {
    private points: number = 0;
    private dice: Dices;
    private playerDiv: HTMLDivElement;
    constructor(public dices: Dices, public elements: HTMLDivElement) {
        this.dice = dices;
        this.playerDiv = elements;
    }
    get getPoints(): number {
        return this.points;
    }

    set setPoints(value: number) {
        this.points = value;
    }
}