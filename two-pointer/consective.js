let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
let k = 2

let left = 0
let right = 0
let count = 0

let maxi = Infinity
while (right <= nums.length - 1) {

    if (nums[right] != 0 && count <= k) {
        right++
    }
}