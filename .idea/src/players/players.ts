export class Player {
    private points: number = 0;
    constructor(public elements: HTMLDivElement) {
    }
    get getPoints(): number {
        return this.points;
    }

    set setPoints(value: number) {
        this.points = value;
    }
}