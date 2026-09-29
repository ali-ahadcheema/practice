let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
let k = 3

let left = 0
let right = 0

let count = 0

let maxi = 0
while (right < nums.length) {
    if (nums[right] == 0) {
        count++
    }
    while (count > k) {
        if (nums[left] == 0) {
            count--
        }
        left++
    }
    maxi = Math.max(maxi, right - left + 1)
    right++
}
console.log(maxi)