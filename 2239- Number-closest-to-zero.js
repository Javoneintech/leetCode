
function findClosestNumber(nums) {
    let closest = nums[0];  // Initialize with the first number in the array
    
    for (let num of nums) {
        // Compare absolute values of num and closest
        if (Math.abs(num) < Math.abs(closest)) {
            closest = num;
        } else if (Math.abs(num) === Math.abs(closest)) {
            // If absolute values are equal, prefer the positive number
            closest = Math.max(closest, num);
        }
    }
    
    return closest;
}