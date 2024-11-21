let array = [1,2,3,4,5,2,3,1,2,3,4,5,2]

let seen = new Set()

for(let i = 0;i<array.length;i++){
    
    if(seen.has(array[i])){
        console.log('The recurring element:  '+array[i])
        return array[i]
    }else{
        seen.add(array[i])
    }
    console.log(i)
  
}