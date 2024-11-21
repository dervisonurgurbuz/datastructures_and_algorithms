const strings = ['a','b','c','d']

strings.pop()
strings.push('end')
strings.unshift('x')
strings.splice(3,1,'hello')
console.log(strings)



function reverse(str){
    
    length = str.length
    let arr = []


    for(let i = str.length-1; 0<=i;i--){
        arr.push(str[i])
    }
    return arr.join('')
}

console.log(reverse('ali'))

str2 = 'dasda,assd'

console.log(str2.split(','))


function mergeSort(arr1,arr2){
    let i = 0
    for(let j=0;j<arr2.length;j++){
        while(arr1[i]<=arr2[j]){
            i++
        }
        arr1.splice(i,0,arr2[j])
    }
   

    return arr1
}

console.log(mergeSort([1,2,4,6,33],[3,5,7,12,63]))