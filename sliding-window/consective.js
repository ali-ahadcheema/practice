let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
let k = 2

let left = 0
let right = 0

let zero = 0

let max = 0
while (right < nums.length) {
    if (nums[right] == 0) {
        zero++
    }
    right++

    while (zero > k) {
        if (nums[left] == 0) {
            zero--
        }
        left++
    }
    max = Math.max(max, right - left)
}

console.log(max)