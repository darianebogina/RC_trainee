import { generateArray } from "./randomArr.js";

function binarySearch(array, n) {
    let lowIndex = 0;
    let highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        const midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (n === array[midIndex]) {
            return midIndex;
        } else if (n < array[midIndex]) {
            highIndex = midIndex - 1;
        } else {
            lowIndex = midIndex + 1;
        }
    }
    return -1;
}

const array = generateArray(10).sort((a, b) => a - b);
binarySearch(array, array[Math.floor(Math.random() * array.length)]);
console.log(performance.now());

// 10 -> 30.x ms
// 100 -> 31.x ms
// 1000 -> 32.x ms
// 10000 -> 33.x ms
// 100000 -> 62.x ms