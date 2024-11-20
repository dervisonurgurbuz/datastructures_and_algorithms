// Find the length of the smallest subarray whose sum is greater than or equal to x.

function minSubarrayWithSum(arr, x) {
    let left = 0, windowSum = 0, minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while (windowSum >= x) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= arr[left++];
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const arr = [2, 3, 1, 2, 4, 3];
const x = 7;
console.log("Smallest Subarray Length:", minSubarrayWithSum(arr, x)); // Output: 2
