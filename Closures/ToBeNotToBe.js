// Write a function expect that helps developers test their code.It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other.If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.If they are equal, it should throw an error "Equal".


var expect = function (val) {
    const obj = {
        toBe(val1) {
            if (val === val1) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(val1) {
            if (val !== val1) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
    return obj;
};


try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).notToBe(5)); // Throws Error: "Equal"
} catch (e) {
    console.error(e.message); // Output: Equal
}
