class Queue {
    constructor() {
        this.array = [];
    }

    enqueue(element) {
        return this.array.push(element);
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.array.shift();
        }
        console.log('Stack is empty');
    }

    front() {
        if (!this.isEmpty()) {
            return this.array[0];
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

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.isEmpty());
