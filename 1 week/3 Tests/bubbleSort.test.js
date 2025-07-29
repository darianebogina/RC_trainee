const bubbleSort = require('../1 Algorithms/bubbleSort.js');
const generateArray = require('../1 Algorithms/randomArr.js');

describe("bubbleSort function", () => {
    test("bubbleSort sorts array correctly", () => {
        const arr = [1, 8, 9, 4, 3, 2, 1, 0, 5, 10];
        const sorted = [0, 1, 1, 2, 3, 4, 5, 8, 9, 10];
        expect(bubbleSort([...arr])).toEqual(sorted);
    });

    test("bubbleSort returns empty array", () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test("bubbleSort doesnt change sorted array", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        expect(bubbleSort([...arr])).toEqual(arr);
    });

    test("bubbleSort sorts array with negative elements correctly", () => {
        const arr = [-1, -10, 0, -5, 1];
        const sorted = [-10, -5, -1, 0, 1];
        expect(bubbleSort([...arr])).toEqual(sorted);
    });

    test("bubbleSort sorts array with random elements correctly", () => {
        const arr = generateArray(100);
        const sorted = [...arr].sort((a, b) => a - b);
        expect(bubbleSort([...arr])).toEqual(sorted);
    });

    test("bubbleSort result length equals input length", () => {
        const arr = [1, 2, 9];
        expect(bubbleSort([...arr]).length).toBe(arr.length);
    });

    test("bubbleSort throws error if input isnt an array", () => {
        expect(() => bubbleSort("stringstring")).toThrow();
    });
})
