export class Player {
    private points: number;
    constructor(public elements: HTMLDivElement) {
    }
    get getPoints(): number {
        return this.points;
    }

    set setPoints(value: number) {
        this.points = value;
    }


}