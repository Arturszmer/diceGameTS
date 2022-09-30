export class Sounds {
    private _throwSound: HTMLAudioElement;

    constructor() {
    }

    get throwSound(): HTMLAudioElement {
        return this._throwSound;
    }

    async audio(dices: number){
        const ex: number = Math.floor(Math.random() * 2 + 1);
        if (dices > 3 || dices == 0){
            switch (ex){
                case 1: this._throwSound = new Audio("./soundsAndImages/Throw-full-1.mp3");
                    break;
                case 2: this._throwSound = new Audio("./soundsAndImages/Throw-full-2.mp3");
                    break;
            }
        } else if (dices > 1){
            this._throwSound = new Audio("./soundsAndImages/Throw-2or3.mp3");
        } else if (dices = 1){
            this._throwSound = new Audio("./soundsAndImages/Throw-one.mp3");
        }
    }

}