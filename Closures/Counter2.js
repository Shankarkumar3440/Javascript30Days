// Write a function createCounter. It should accept an initial integer init.It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


var createCounter = function (init) {
    const n = init
    var obj = {
        increment() {
            return init += 1
        },
        decrement() {
            return init -= 1
        },
        reset() {
            return init = n
        }
    }
    return obj
};

const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement()); 
