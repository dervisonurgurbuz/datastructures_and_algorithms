// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

let count = 1;
let answer = 1;
function findFactorialRecursive(number) {
    //code here
    if(number === 2){
        return 2
    }
    // count++
    // answer = count*answer
    
    // if(count===number){
    //     return answer
    // }

    // return findFactorialRecursive(number);
    return number * findFactorialRecursive(number-1)
  }
  

  function findFactorialIterative(number) {
    //code here
    if (number === 2){
        return 2
    }
    let answer = 1;

    for(let i= 2;i<=number;i++){
        answer = i* answer
    }
    return answer;
  }
  

console.log(findFactorialIterative(10))
console.log(findFactorialRecursive(10))