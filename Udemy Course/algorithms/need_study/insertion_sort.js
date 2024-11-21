const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (arr) => {
    // Start from the beginning of the array
    for (let i = 0; i < arr.length; i++) {
      // Take a portion of the array from the first index to the current index,
      // iterate backwards to compare and swap the current index to the right spot
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
          let temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
      // after it goes to the right spot, which means that the current index now is greater that the previous
      // break the backward interation and continue to compare the next index of the array
        } else {
          break;
        }
      }
    }
    return arr;
  }

  console.log(insertionSort(numbers))