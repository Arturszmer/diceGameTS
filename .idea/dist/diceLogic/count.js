export const count = (checked, multiplesArray) => {
    console.log(multiplesArray, 'multiples to count');
    let value = 0;
    if (multiplesArray.length >= 3 && multiplesArray[0] == 1 && parseInt(checked.children[0].textContent) == 1) {
        value += multiplesArray[0] * 10 * (multiplesArray.length - 2) * 10;
        console.log(value, 'value 1');
    }
    else if (multiplesArray.length >= 3) {
        value += multiplesArray[0] * 10 * (multiplesArray.length - 2);
        console.log(value, 'value 2');
    }
    else {
        multiplesArray = [];
    }
    if (multiplesArray.indexOf(1) !== -1 || multiplesArray.indexOf(5) !== -1) {
    }
    else if (parseInt(checked.children[0].textContent) == 1) {
        value = 0;
        value += 10;
        console.log(value, 'value 3');
    }
    else if (parseInt(checked.children[0].textContent) == 5) {
        value = 0;
        value += 5;
        console.log(value, 'value 4');
    }
    return value;
};
