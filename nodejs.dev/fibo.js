const fib = n => {
    // Given a number n, print nth Fibonacci number.
    // Time complexity: T(n) = T(n-1) + T(n-2), exponential
    if (n < 0) {
        console.log("Incorrect input");
    } else if (n == 0) { 
        // first Fibonacci number is 0 
        return 0;
    } else if (n == 1) {
        // second Fibonacci number is 1 
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
};

const range = Array.from({length: 10}, (k, v) => v);
range.forEach(i => {
    console.log(i, fib(i));
});