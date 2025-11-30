const mult = (a) => {
    return (b) => {
        return a * b;
    }
}

console.log(mult(6)(9))


const carrying = (func) => {
    return (a) => {
        return (b) => {
            return func(a, b);
        }
    }
}

const sum = (a, b) => {
    return a + b;
}

console.log(carrying(sum)(5)(6));
