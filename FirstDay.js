let arr1 = [1, 2, 3]
const sum = arr1.map(mapMethod);

function mapMethod(arr1) {
    return arr1 + 1
}
console.log(sum);

let arr2 = [1, 2, 3]

const sum1 = arr2.map((n, i) => {
    return n + i;   // 1+0 = 1, 2+1 = 3, 3+2 = 5
})
console.log(sum1);

console.log('----------------------------------------------------');

let arr3 = [0, 10, 20, 30]
const sum2 = arr3.filter(filterMethod);

function filterMethod(arr3) {
    return arr3 > 10
}
console.log("complex method = ", sum2);

const arr = arr3.filter((n) => n > 10);
console.log(arr);
console.log(arr3);

console.log('---------------------------------------------------');

// reduce Method

const num = [1, 2, 3, 4]

const reduceMethod = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reduceMethod);

console.log('---------------------------------------------------');
// function composition
function add(a, b) {
    return a + b
}
function mul(val) {
    return val * 2
}
function square(val) {
    return val * val
}
const composeTwo = (num1, num2, num3) => (a, b) => num3(num2(num1(a, b)))

const result = composeTwo(add, mul, square)
console.log(result(4, 5))

console.log('-----------------------------------------------------------');
// function compostion
// let count = 0
// for (let i = 0; i < args.length; i++) {
//     count += 1
// }
// return count
console.log('-----------------------------------------------------------');
// function test() {
//     console.log('hello');

// }

// const stop = setInterval(test, 1000)

// setTimeout(() => {
//     clearInterval(stop)
// }, 5000)

console.log('-----------------------------------------------------------');

const maped = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
])
console.log(maped.get(1));