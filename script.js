function threeSum(arr, target) {
    // Sort the array to use the two-pointer technique
    arr.sort((a, b) => a - b);
    
    let closestSum = Infinity;

    // Iterate over the array, and for each element, use two pointers
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            // If this sum is closer to the target than the previous closest, update it
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move pointers to try and get closer to the target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If the sum is exactly the target, return it immediately
                return currentSum;
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
