export class Player {
    constructor(elements) {
        this.elements = elements;
        this.points = 0;
    }
    get getPoints() {
        return this.points;
    }
    set setPoints(value) {
        this.points = value;
    }
}
