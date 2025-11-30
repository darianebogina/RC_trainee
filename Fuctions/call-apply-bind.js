let name = 'Joe';
// OK
let user = {
    age: 15,
    sayHello: function (name) {
        return `Hello, I am ${this.age} y.o.! My name is ${name}.`;
    }
}

console.log(user.sayHello(name));

//Undefined
let greetUser = user.sayHello;

console.log(greetUser(name));

// Call apply
console.log(greetUser.call(user, name));
console.log(greetUser.apply(user,[name]));

// bind
let forBindCall = user.sayHello;
console.log(forBindCall.bind(user)(name));


//Default parameters
let man = {
    nameMan: "Kevin",
};
let longlongFunc = function (age, food, job) {
    return `Hello, I am ${this.nameMan}! I am ${age} y.o.! I like ${food}. My job is ${job}`;
}

let callLongBind = longlongFunc.bind(man, '15', 'pizza', 'swimmer');
console.log(callLongBind());
