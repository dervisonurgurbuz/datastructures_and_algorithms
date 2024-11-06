// Given a number N return the index value of the Fibonacci
// sequence, where the sequence is:
// o, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of
// the 2 previous values, that means that for N=5 -> 2+3
function fibonacciIterative(n){
    let arr = [0,1];
    for (let i = 2; i < n +1; i++){ // O(n)
    arr.push(arr[i-2] + arr[i-1]);
    }
    console.log(arr[n])
    return arr[n]
    }
    // fibonacciIterative(3);
    function fibonacciRecursive(n) { // O(2^n)
    if (n < 2) {
    return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}
    
console.log(fibonacciRecursive(5))
