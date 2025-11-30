function coinsNeeded(amount, coinDenominations) {
    let arr = [];
    let count = 0;
    for (let i = coinDenominations.length - 1; i >= 0; i--) {
        let maxElem = coinDenominations[i];
        if (maxElem > amount) {
            continue;
        }
        count = Math.floor(amount / maxElem);
        arr.push(count);
        amount = amount - count * maxElem;
    }
    return arr.reduce((acc, elem) => acc+elem, 0);
}

const coins1= [1,5,10,25];
const coins2= [1,2,5,10,20,50];

console.log(coinsNeeded(76, coins1))
