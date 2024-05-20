// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called(n, n + 1, n + 2, etc).

var createCounter = function (n) {

    return function counter() {
        return n++
    };
};


const b = createCounter(10)
console.log(b());
console.log(b());
console.log(b());