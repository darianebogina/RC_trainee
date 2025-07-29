// import {generateArray} from "./randomArr.js";
function bubbleSort(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Value must be an array");
    }
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length - 1; j += 1) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;

// const arr = generateArray(100000);
// bubbleSort(arr);
console.log(performance.now());

// 10 -> 31.x ms
// 100 -> 31.x ms
// 1000 -> 35.x ms
// 10000 -> 152.x ms
// 100000 -> 18611.x ms
