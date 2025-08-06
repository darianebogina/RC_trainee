"use strict";
/*Напиши функцию isArrayOfType<T>, которая проверяет, что переданный массив состоит только из элементов типа T.
    Функция должна использовать:

    generics для типа T
type guard, чтобы корректно сужать тип*/
Object.defineProperty(exports, "__esModule", { value: true });
const isArrayOfType = (arr, typeGuard) => {
    return arr.every(cur => typeGuard(cur));
};
// Ожидаемое использование:
const nums = [1, 2, 3];
if (isArrayOfType(nums, (x) => typeof x === "number")) {
    // Здесь nums: number[]
    console.log(nums.reduce((a, b) => a + b, 0));
}
//# sourceMappingURL=typeguards_generics.js.map