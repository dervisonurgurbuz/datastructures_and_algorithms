/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    let hasmap = new Map()


    for(let i = 0;i<nums.length;i++){
        let complement = target - nums[i]
        if(hasmap.has(complement)){
            return [hasmap.get(complement),i]
        }else{
            hasmap.set(nums[i], i)
        }
    }

    
};
