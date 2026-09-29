let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
let k = 2

let left = 0
let right = 0
let max = 0
let count = 0
while (right <= nums.length - 1) {
    if (nums[right] == 0) {
        count++
    }

    while (count > k) {
        if (nums[left] == 0) {
            count--
        }
        left++
    }
    max = Math.max(max, right - left + 1)
    right++
}
console.log(max)