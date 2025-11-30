// Greeting OK
// let name = "John";
//
// const sayHi = () => {
//     return `Hello ${name}`;
// }
//
// name = "NewName";
//
// console.log(sayHi());

// Greeting Error
// let greeting = "hi";
//
// if (true) {
//     let nickname = "bro";
//     const greetBro = () => {
//         return `${greeting} ${nickname}`;
//     }
// }
//
// console.log(greetBro());

// Lexical environment
// let x = 1;
// const lexicalEnvironment = () => {
//     console.log(x);
//     let x = 22;
// }
//
// console.log(lexicalEnvironment());
console.log(counter()());

// Counter

function counter() {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}
//
// const counter = () => {
//     let count = 0;
//
//     return () => {
//         count++;
//         return count;
//     };
// }

// const myCounter1 = counter();
// const myCounter2 = counter();
//
// console.log(myCounter1());
// console.log(myCounter2());
// console.log(myCounter1());
// console.log(myCounter2());

// const counter = () => {
//
//     return () => {
//         if ("count" in counter) {
//             counter.count++;
//         } else {
//             counter.count = 1;
//         }
//
//         return counter.count;
//     };
// }
