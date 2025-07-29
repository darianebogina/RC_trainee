//import {generateArray} from "./randomArr.js";

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }

    const pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);

    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j += 1) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}
module.exports = quickSort;
// const arr = generateArray(100000);
// quickSort(arr);
console.log(performance.now());

// 10 -> 32.x ms
// 100 -> 32.x ms
// 1000 -> 33.x ms
// 10000 -> 47.x ms
// 100000 -> 106.x ms
