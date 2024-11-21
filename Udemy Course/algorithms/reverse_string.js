//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterate(str) {
    let arr = []
    for(let i =str.length-1;0<=i;i--){
        arr.push(str[i])
    }
    return arr.join('')
}

function reverseStringRecursive(str){
    
    return 
}

console.log(reverseStringIterate('yoyo mastery'))
//should return: 'yretsam oyoy'