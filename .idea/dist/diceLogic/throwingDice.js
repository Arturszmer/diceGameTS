export const throwDice = (throwingDice) => {
    const result = [];
    if (throwingDice == 0 || throwingDice == 5) {
        for (let i = 0; i < 5; i++) {
            let a = Math.floor(Math.random() * 6 + 1);
            result.push(a);
        }
    }
    else {
        for (let i = 1; i <= 5 - throwingDice; i++) {
            let a = Math.floor(Math.random() * 6 + 1);
            result.push(a);
        }
    }
    return result;
};
export const checkMultipleNumber = (arr) => {
    let array = [];
    for (let i = 1; i <= 6; i++) {
        let filter = filterDice(i, arr);
        if (filter.length >= 3) {
            array = filter;
            return array;
        }
    }
    return [];
};
const filterDice = (value, arr) => {
    const newArr = [];
    for (let v of arr) {
        if (value == v) {
            newArr.push(value);
        }
    }
    return newArr;
};
