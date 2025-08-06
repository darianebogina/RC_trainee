"use strict";
/*Создать функции с использованием дженериков

getFirstElement<T>(arr: T[]): T, возвращающую первый элемент массива любого типа.
mergeObjects<T, U>(obj1: T, obj2: U): T & U, объединяющую два объекта.*/
Object.defineProperty(exports, "__esModule", { value: true });
const getFirstElement = (arr) => {
    const firstElement = arr[0];
    if (typeof firstElement === "undefined") {
        throw new Error("firstElement is undefined");
    }
    return firstElement;
};
const mergeObjects = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2);
};
const createUser = (name, email, isAdmin) => {
    return isAdmin !== undefined ?
        { name, email, isAdmin } : { name, email };
};
//const createUser2 = (name: string, email: string, isAdmin?: boolean) => {
//    return isAdmin !== undefined ?
//        { name, email, isAdmin } : { name, email };
//};
const array1 = [1, 2, 3];
console.log(getFirstElement(array1));
const array2 = ['1', '2', '3'];
console.log(getFirstElement(array2));
// const array3: Array<string> = [];
// console.log(getFirstElement(array3));
const obj1 = {
    id: "1",
    name: "meme",
    price: 15,
};
const obj2 = {
    age: "2",
    nickname: "mee",
    price: 11,
};
console.log(mergeObjects(obj1, obj2));
console.log(createUser("Masha", "@gmail.com", true));
console.log(createUser("Masha", "@gmail.com"));
//# sourceMappingURL=generics_typeInterface.js.map