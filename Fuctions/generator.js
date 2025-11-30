function* generator(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
    return 'generator is done';
}

let generatorCall = generator(-2, 2);

console.log(generatorCall.next());
console.log(generatorCall.next());
console.log(generatorCall.next());
console.log(generatorCall.next());
console.log(generatorCall.next());
console.log(generatorCall.next());

let generatorCall1 = generator(-2, 2);
for (let num of generatorCall1) {
    console.log(num);
}
