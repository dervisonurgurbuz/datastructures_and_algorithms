// Find the length of the smallest subarray whose sum is greater than or equal to x.

function minSubarrayWithSum(arr, x) {
    let left = 0, windowSum = 0, minLength = Infinity;
    
    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right]; // Add the current element to the window sum

        // Shrink the window while the condition (windowSum >= x) is satisfied
        while (windowSum >= x) {
            // Update the minimum length if the current window is smaller
            minLength = Math.min(minLength, right - left + 1);

            // Shrink the window by removing the element at the `left` pointer
            windowSum -= arr[left];
            left++; // Move the `left` pointer forward
        }
    }

    // If no valid subarray was found, return 0. Otherwise, return the minimum length
    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const arr = [2, 3, 1, 2, 4, 3];
const x = 7;
console.log("Smallest Subarray Length:", minSubarrayWithSum(arr, x)); // Output: 2
