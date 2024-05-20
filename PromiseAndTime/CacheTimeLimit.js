// Write a class that allows getting and setting key - value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.Once the duration has elapsed, the key should be inaccessible.The method should return true if the same un - expired key already exists and false otherwise.Both the value and duration should be overwritten if the key already exists.

//     get(key): if an un - expired key exists, it should return the associated value.Otherwise it should return -1.

// count(): returns the count of un - expired keys.

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        let alreadyExist = this.cache.has(key);

        // Clear the previous timeout if it exists
        if (alreadyExist) {
            clearTimeout(this.cache.get(key).timeoutId);
        }
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExist);
    }
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();

// Add item to the cache with a duration of 1000ms
console.log(cache.set('a', 1, 1000)); // Output: false (new item)
console.log(cache.get('a')); // Output: 1

// Add another item with the same key but different value
console.log(cache.set('a', 2, 2000)); // Output: true (item already exists)
console.log(cache.get('a')); // Output: 2

// Add another item with a different key
console.log(cache.set('b', 3, 500)); // Output: false (new item)
console.log(cache.get('b')); // Output: 3

// Wait for more than 1000ms
setTimeout(() => {
    console.log(cache.get('a')); // Output: -1 (expired)
    console.log(cache.get('b')); // Output: -1 (expired)
    console.log(cache.count()); // Output: 0 (no items in cache)
}, 1500);