export class Player {
    constructor(dices, elements, playerName) {
        this.dices = dices;
        this.elements = elements;
        this.playerName = playerName;
        this.points = 0;
        this.dice = dices;
        this.playerDiv = elements;
        this._name = playerName;
    }
    get getPoints() {
        return this.points;
    }
    set setPoints(value) {
        this.points = value;
    }
    addPoints(gameResult) {
        this.points += gameResult;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
