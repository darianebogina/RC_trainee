/*Напиши функцию isArrayOfType<T>, которая проверяет, что переданный массив состоит только из элементов типа T.
    Функция должна использовать:

    generics для типа T
type guard, чтобы корректно сужать тип*/

const isArrayOfType = <T> (arr: unknown[], typeGuard: (item: unknown) => item is T): arr is T[] => {
  return arr.every(cur => typeGuard(cur));
}

// Ожидаемое использование:
const nums: unknown[] = [1, 2, 3];
if (isArrayOfType<number>(nums, (x) => typeof x === "number")) {
    // Здесь nums: number[]
    console.log(nums.reduce((a, b) => a + b, 0));
}