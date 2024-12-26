// ## Using a min-heap to efficiently keep track of the kth largest number in a stream

class KthLargest {
    constructor(k, nums) {
        this.k = k; // The kth largest number to track
        this.minHeap = []; // A min-heap to store the k largest elements

        // Add initial numbers to the min-heap
        for (const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        if (this.minHeap.length < this.k) {
            // If the heap has less than k elements, just add the new value
            this.minHeap.push(val);
            this._heapifyUp();
        } else if (val > this.minHeap[0]) {
            // Replace the smallest element in the heap if the new value is larger
            this.minHeap[0] = val;
            this._heapifyDown();
        }

        return this.minHeap[0]; // The smallest element in the heap is the kth largest
    }

    // Helper function to maintain heap order (bubble up the last element)
    _heapifyUp() {
        let index = this.minHeap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.minHeap[index] >= this.minHeap[parentIndex]) break;

            [this.minHeap[index], this.minHeap[parentIndex]] = [this.minHeap[parentIndex], this.minHeap[index]];
            index = parentIndex;
        }
    }

    // Helper function to maintain heap order (bubble down the root element)
    _heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < this.minHeap.length && this.minHeap[leftChildIndex] < this.minHeap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.minHeap.length && this.minHeap[rightChildIndex] < this.minHeap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.minHeap[index], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[index]];
            index = smallest;
        }
    }
}

// Example usage:
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // Output: 4
console.log(kthLargest.add(5)); // Output: 5
console.log(kthLargest.add(10)); // Output: 5
console.log(kthLargest.add(9)); // Output: 8
console.log(kthLargest.add(4)); // Output: 8
