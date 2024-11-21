// [1,2,3,4]  is the pair sum 8
// [1,2,3,4,4]

arr = [1,2,3,4]
sum = 8

function isPairSum (arr, sum){

    const mySet = new Set()
    
    for(let i =0;i<arr.length; i++){
        if (mySet.has(arr[i])) {
            return true;
        }else{
            mySet.add(sum-arr[i]);
        }
    }
    return false


}

console.log(isPairSum(arr, sum))


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let mySet = new Set
//     if(nums.lengh>2){
//         for (let i=0; i<nums.length;i++){
//             if(!mySet.has(target-nums[i])){
//                 mySet.add(target-nums[i])
//             }else{
//                 return (i,i)
//             }

//     }
//     }
    

// };