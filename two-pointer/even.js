let nums = [3, 1, 2, 4]

let left = 0
let right = nums.length - 1

while (left <= right) {

    if (nums[left] % 2 != 0) {
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        right--
    }
    else {
        left++
    }
}
console.log(nums)