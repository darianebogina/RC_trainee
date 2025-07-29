class Stack {
    constructor() {
        this.array = [];
    }

    push(element) {
        return this.array.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.array.pop();
        }
        throw new Error('Stack is empty');
    }

    peek() {
        if (!this.isEmpty()) {
            return this.array[this.size() - 1];
        }
        throw new Error('Stack is empty');
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.array.length;
    }
}

function checkBrackets(str) {
    if (str.length % 2 !== 0) {
        return false;
    }
    const stack = new Stack();
    const bracketsArray = str.split('');
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (let i = 0; i <= bracketsArray.length - 1; i += 1) {
        if (brackets[bracketsArray[i]]) {
            stack.push(bracketsArray[i]);
        }
        else if (Object.values(brackets).includes(bracketsArray[i])) {
            if (stack.isEmpty()) {
                return false;
            }
            if (brackets[stack.pop()] !== bracketsArray[i]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(checkBrackets("({[]}))"));

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(5);
// stack.pop();
// stack.pop();
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(stack);