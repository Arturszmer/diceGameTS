class Players {
    constructor(private _points: number) {
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }
}