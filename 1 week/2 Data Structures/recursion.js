function fibonacci(n) {
    if (n < 0) {
        throw new Error("n must be a positive number");
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumOfObjectValues(obj) {
    let sum = 0;
    const values = Object.values(obj);
    for (let i = 0; i < values.length; i += 1) {
        if (typeof values[i] === "number") {
            sum += values[i];
        }
        else if (typeof values[i] === "object" && values[i] !== null) {
            sum += sumOfObjectValues(values[i]);
        }
        else {
            throw new Error("An error has occurred");
        }
    }
    return sum;
}

console.log(sumOfObjectValues({ a: 10, b: { c: { d: 20 } } }));
//console.log(fibonacci(5));
