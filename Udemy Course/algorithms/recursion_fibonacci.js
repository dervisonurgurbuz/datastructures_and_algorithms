function fibonacciRecursion(n){  //O(n)

    if (n<2){
        return n
    }

    return fibonacciRecursion(n-1)+ fibonacciRecursion(n-2)

}

console.log(fibonacciRecursion(6))

function fibonacciLoop(n){  // O(2^n)
   let arr = [0,1]

   for(let i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2])
   }

   return arr[n]
}

console.log(fibonacciLoop(6))