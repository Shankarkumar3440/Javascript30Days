// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs.Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.Assume that if a value has already been cached for the arguments(b, a) where a != b, it cannot be used for the arguments(a, b).For example, if the arguments are(3, 2) and(2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
    let cache = {};
    let callCount = 0;

    function memoizedFunction(...args) {
        let n = JSON.stringify(args);  // Convert arguments into a string
        if (n in cache) {
            return cache[n];
        } else {
            callCount++;  // Increment call count when the function is actually called
            let result = fn.apply(this, args);  // Call the original function with the arguments
            cache[n] = result;  // Store the result in the cache
            return result;
        }
    }

    memoizedFunction.getCallCount = function () {
        return callCount;
    };

    return memoizedFunction;
}

function sum(x, y) {
    return x + y;
}

// Create a memoized version of the sum function
const memoizedSum = memoize(sum);

// Simulate the actions and values
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

const results = [];

actions.forEach((action, index) => {
    if (action === "call") {
        results.push(memoizedSum(...values[index]));
    } else if (action === "getCallCount") {
        results.push(memoizedSum.getCallCount());
    }
});

console.log(results); // Outputs: [4, 4, 1, 3, 2]
