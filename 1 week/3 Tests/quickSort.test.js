const quickSort = require('../1 Algorithms/quickSort.js');
const generateArray = require('../1 Algorithms/randomArr.js');

describe("quickSort function", () => {
    test("quickSort sorts array correctly", () => {
        const arr = [1, 8, 9, 4, 3, 2, 1, 0, 5, 10];
        const sorted = [0, 1, 1, 2, 3, 4, 5, 8, 9, 10];
        expect(quickSort([...arr])).toEqual(sorted);
    });

    test("quickSort returns empty array", () => {
        expect(quickSort([])).toEqual([]);
    });

    test("quickSort doesnt change sorted array", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        expect(quickSort([...arr])).toEqual(arr);
    });

    test("quickSort sorts array with negative elements correctly", () => {
        const arr = [-1, -10, 0, -5, 1];
        const sorted = [-10, -5, -1, 0, 1];
        expect(quickSort([...arr])).toEqual(sorted);
    });

    test("quickSort sorts array with random elements correctly", () => {
        const arr = generateArray(100);
        const sorted = [...arr].sort((a, b) => a - b);
        expect(quickSort([...arr])).toEqual(sorted);
    });

    test("quickSort result length equals input length", () => {
        const arr = [1, 2, 3, 6];
        expect(quickSort([...arr]).length).toBe(arr.length);
    });

    test("quickSort throws error if input isnt an array", () => {
        expect(() => quickSort(123)).toThrow();
    });
})
