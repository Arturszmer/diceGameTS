export const count = (checked: Element, multiplesArray: HTMLButtonElement[]) => {
    let value: number = 0;
    if (multiplesArray.length >= 3 && parseInt(multiplesArray[0].children[0].textContent) == 1 && parseInt(checked.children[0].textContent) == 1){
        value += 1 * 10 * (multiplesArray.length - 2) * 10;
    } else if (multiplesArray.length >= 3 && multiplesArray[0].classList.contains("goodNumber") && parseInt(checked.children[0].textContent) == parseInt(multiplesArray[0].children[0].textContent)){
        value += parseInt(multiplesArray[0].children[0].textContent) * 10 * (multiplesArray.length - 2);
    } else if(parseInt(checked.children[0].textContent) == 1) {
        value = 0;
        value += 10;
    } else if (parseInt(checked.children[0].textContent) == 5){
        value = 0;
        value += 5;
    }
    return value;
}