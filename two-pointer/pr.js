let nums = [2, 0, 2, 1, 1, 0]
let right = nums.length - 1
let left = 0

let scaner = 0

while (scaner <= right) {
    if (nums[scaner] == 0) {
        let temp = nums[left]
        nums[left] = nums[scaner]
        nums[scaner] = temp
        left++
        scaner++
    }
    else if (nums[scaner] == 2) {
        let temp = nums[right]
        nums[right] = nums[scaner]
        nums[scaner] = temp
        right--
    }
    else {
        scaner++
    }

}

console.log(nums)