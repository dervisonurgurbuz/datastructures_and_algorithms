const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr){

    for(let j=0;j<arr.length-1;j++){
        for(let i =0;i<arr.length-1;i++){
        
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1]= temp
    
            }
        }
    }
   
    return arr
}

console.log(bubbleSort(numbers))