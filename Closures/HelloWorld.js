// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function (...args) {
        return "Hello World"
    }
}
var a = createHelloWorld()
console.log(a(12));
