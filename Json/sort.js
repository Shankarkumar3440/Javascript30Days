// Given an array arr and a function fn, return a sorted array sortedArr.You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.


var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

let func = function (x) {
    return x;
};

let arr = [5, 4, 3, 2, 1];

console.log(sortBy(arr, func));// [1, 2, 3, 4, 5]
