export class Player {
    constructor(elements) {
        this.elements = elements;
    }
    get getPoints() {
        return this.points;
    }
    set setPoints(value) {
        this.points = value;
    }
}
