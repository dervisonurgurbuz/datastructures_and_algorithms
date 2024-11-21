function efficientTrek(trails, record) {
    // Calculate the total length of all trails.
    const totalLength = trails.reduce((acc, length) => acc + length, 0);
  
    // Find the maximum sum of lengths for 'record' consecutive days.
    let maxSumForRecordDays = 0;
    let tempSum = 0;
  
    // Initially, take the sum of the first 'record' trails.
    for (let i = 0; i < record; i++) {
      tempSum += trails[i];
    }
    maxSumForRecordDays = tempSum;
  
    // Slide the window of 'record' trails and find the maximum sum.
    for (let i = record; i < trails.length; i++) {
      tempSum = tempSum - trails[i - record] + trails[i];
      maxSumForRecordDays = Math.max(maxSumForRecordDays, tempSum);
    }
  
    // The minimum sum of the longest trails is the total length minus the maximum sum for 'record' days.
    return totalLength - maxSumForRecordDays;
  }
  
  // Example usage:
  const trails = [150, 200, 400, 350, 250];
  const record = 3;
  console.log(efficientTrek(trails, record)); // Expected output: 750
  