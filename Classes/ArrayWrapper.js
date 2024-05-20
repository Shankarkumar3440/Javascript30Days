// Create a class ArrayWrapper that accepts an array of integers in its constructor.This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets.For example, [1, 2, 3].


var ArrayWrapper = function (nums) {
    this.array = nums; // Use this to properly assign the array to the instance
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.array.reduce((sum, num) => sum + num, 0); // Compute the sum of the array elements
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return "[" + this.array.join(",") + "]"; // Return the array as a string in the correct format
};


const arr = new ArrayWrapper([1, 2, 3, 4]);
console.log(arr.valueOf()); // Output: 10
