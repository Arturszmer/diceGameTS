export class Player {
    constructor(dices, elements) {
        this.dices = dices;
        this.elements = elements;
        this.points = 0;
        this.dice = dices;
        this.playerDiv = elements;
    }
    get getPoints() {
        return this.points;
    }
    set setPoints(value) {
        this.points = value;
    }
}
