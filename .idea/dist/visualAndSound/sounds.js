var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Sounds {
    constructor() {
    }
    get soundDuration() {
        return this._soundDuration;
    }
    get throwSound() {
        return this._throwSound;
    }
    audio(dices) {
        return __awaiter(this, void 0, void 0, function* () {
            const ex = Math.floor(Math.random() * 2 + 1);
            if (dices > 3 || dices == 0) {
                switch (ex) {
                    case 1:
                        this._throwSound = new Audio("./soundsAndImages/Throw-full-1.mp3");
                        this._soundDuration = this.durationThrow(this.throwSound);
                        break;
                    case 2:
                        this._throwSound = new Audio("./soundsAndImages/Throw-full-2.mp3");
                        this._soundDuration = this.durationThrow(this.throwSound);
                        break;
                }
            }
            else if (dices > 1) {
                this._throwSound = new Audio("./soundsAndImages/Throw-2or3.mp3");
            }
            else if (dices = 1) {
                this._throwSound = new Audio("./soundsAndImages/Throw-one.mp3");
            }
        });
    }
    durationThrow(e) {
        return e.duration;
    }
}
