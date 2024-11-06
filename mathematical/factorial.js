// Write two functions that find the factorial of any
// number. One should use recursive, the other should just
// use a for loop
function findFactoriatIterative(num){ // O(n)
    let res = num;
    for (let i = num; i > 0; i--){
    if (i != 1){
    res = res * (i-1);
    }
    }
    // console.log(res)
    return res
    }
    function findFactoriatRecursive(num){ // O(n)
    if (num == 2) {
    return 2;
    }
    return num * findFactoriatRecursive(num-1)
}

console.log(findFactoriatIterative(4))