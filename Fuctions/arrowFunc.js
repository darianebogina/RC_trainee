//this
let user = {
    name: "Mary",
    greetArrow: () => {
        return `Hi, ${this.name}`
    },
    greetFunc: function () {
        return `Hi, ${this.name}`
    },
};

console.log(user.greetFunc());
console.log(user.greetArrow());

//arguments
function sum(a, b) {
    return arguments[0] + arguments[1];
}

const arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(1, 2));
console.log(sum(1, 2));
