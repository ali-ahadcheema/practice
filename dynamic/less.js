let nums = [2]
let k = 1

let product = 1
let left = 0
let right = 0
let count = 0

while (right < nums.length) {
    product = product * nums[right]
    while (product >= k) {
        product = product / nums[left]
        left++
    }

    count += (right - left) + 1
    right++
}
console.log(count)