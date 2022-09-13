class Players {
    constructor(_points) {
        this._points = _points;
    }
    get points() {
        return this._points;
    }
    set points(value) {
        this._points = value;
    }
}
