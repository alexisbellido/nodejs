const fib = n => {
    // this is O(2^n), very inefficient as it's call fib for values already calculated
    let result;
    // Given a number n, print nth Fibonacci number.
    // Time complexity: T(n) = T(n-1) + T(n-2), exponential
    if (n < 0) {
        throw Error("Incorrect input");
    } else if (n == 0) { 
        // first Fibonacci number is 0 
        result = 0;
    } else if (n == 1) {
        // second Fibonacci number is 1 
        result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    return result;
};

// memoization to do it the dynamic programming way where
// we store solutions already calculated
const fib_memo = (n, memo) => {
    if (memo[n] != null) {
        return memo[n];
    }
    // otherwise, the rest is like the original fib function
    // console.log(`calculate fib_memo(${n})`);
    let result;
    // Given a number n, print nth Fibonacci number.
    // Time complexity: T(n) = T(n-1) + T(n-2), exponential
    if (n < 0) {
        throw Error("Incorrect input");
    } else if (n == 0) { 
        // first Fibonacci number is 0 
        result = 0;
    } else if (n == 1) {
        // second Fibonacci number is 1 
        result = 1;
    } else {
        result = fib_memo(n-1, memo) + fib_memo(n-2, memo);
    }
    memo[n] = result;
    return result;
};

// bottom-up approach to do it the dynamic programming way where
// we store solutions already calculated
const fib_bottom_up = n => {
    if (n < 0) {
        throw Error("Incorrect input");
    } else if (n == 0) { 
        // first Fibonacci number is 0 
        return 0;
    } else if (n == 1) {
        // second Fibonacci number is 1 
        return 1;
    }
    const bottom_up = Array(n + 1);
    bottom_up[0] = 0;
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i < (n + 1); i++) {
        bottom_up[i] = bottom_up[i-1] + bottom_up[i-2];
    }
    return {
        fib: bottom_up[n],
        bottom_up: bottom_up,
    }
};

// create an array with a range of numbers for 0 to (n - 1)
const n = 7;
const range = Array.from({length: n}, (k, v) => v);

console.log('=== inefficient fibo');
range.forEach(i => {
    console.log(fib(i));
    // console.log(i, fib(i));
});

console.log('=== fibo_memo');
// create an array filled with nulls
const memo = new Array(n).fill(null);
range.forEach(i => {
    console.log(fib_memo(i, memo));
});

// creates the array with results from the bottom up inside the function
console.log(`fib_bottom_up(${n})`);
console.log(fib_bottom_up(n));



