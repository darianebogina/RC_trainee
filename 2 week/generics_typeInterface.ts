/*Создать функции с использованием дженериков

getFirstElement<T>(arr: T[]): T, возвращающую первый элемент массива любого типа.
mergeObjects<T, U>(obj1: T, obj2: U): T & U, объединяющую два объекта.*/

const getFirstElement = <T>(arr: T[]): T => {
    const firstElement: T | undefined = arr[0];
    if (typeof firstElement === "undefined") {
        throw new Error("firstElement is undefined");
    }
    return firstElement;
};

const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
    return Object.assign({}, obj1, obj2);
};
/*
Напиши простую функцию `createUser = (name: string, email: string, isAdmin?: boolean) => {}`, которая возвращает объект типа `User`:
```ts
type User = {
	name: string;
	email: string;
	isAdmin?: boolean;
}
```
Посмотри как TS выводит тип, когда ты явно указываешь тип возвращаемой функции и нет
- `createUser = () => {}`
- `createUser = ():User => {}`
*/
type User = {
    name: string;
    email: string;
    isAdmin?: boolean;
}

const createUser = (name: string, email: string, isAdmin?: boolean): User => {
    return isAdmin !== undefined ?
        { name, email, isAdmin } : { name, email };
};

//const createUser2 = (name: string, email: string, isAdmin?: boolean) => {
//    return isAdmin !== undefined ?
//        { name, email, isAdmin } : { name, email };
//};

const array1: Array<number> = [1, 2, 3];
console.log(getFirstElement(array1));
const array2: Array<string> = ['1', '2', '3'];
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