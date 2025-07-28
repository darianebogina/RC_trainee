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
        console.log('Stack is empty');
    }

    peek() {
        if (!this.isEmpty()) {
            return this.array[this.size() - 1];
        }
        console.log('Stack is empty');
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.array.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(5);
stack.pop();
stack.pop();
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack);