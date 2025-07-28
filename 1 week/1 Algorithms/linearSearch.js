import {generateArray} from "./randomArr.js";

function linearSearch(array, n) {
    for (let i = 0; i <= array.length; i += 1) {
        if (array[i] === n) {
            return i;
        }
    }
    return -1;
}

const array = generateArray(100000).sort((a, b) => a - b);
linearSearch(array, array[Math.floor(Math.random() * array.length)]);
console.log(performance.now());

// 10 -> 30.x ms
// 100 -> 30.x ms
// 1000 -> 32.x ms
// 10000 -> 35.x ms
// 100000 -> 62.x ms
