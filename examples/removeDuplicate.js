function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Slow pointer

    for (let j = 1; j < nums.length; j++) { // Fast pointer
        if (nums[j] !== nums[i]) {
            i++; // Move the slow pointer forward
            nums[i] = nums[j]; // Overwrite the value at slow pointer
        }
    }

    return i + 1; // The new length of the array
}

// Example usage:
let nums = [1, 1, 2, 2, 3, 4, 4];
let newLength = removeDuplicates(nums);
console.log("New Length:", newLength); // Output: 4
console.log("Modified Array:", nums.slice(0, newLength)); // Output: [1, 2, 3, 4]
