let obj = {
    from: 1,
    to: 12,
    [Symbol.iterator]() {
        return iterator(this.from, this.to);
    }
}

function iterator(from, to) {
    let cur = from;
    return {
        next() {
            if (cur <= to) {
                return {done: false, value: cur++};
            }
            return {done: true};
        }
    }
}

for (let num of obj) {
    console.log(num);
}
