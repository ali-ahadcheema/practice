let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

let start = k
let end = nums.length - 1
let left = 0
let right = nums.length - 1

while (left < right) {
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
}

let i = 0
while (i < k) {
    let temp = nums[i]
    nums[i] = nums[k - 1]
    nums[k - 1] = temp
    i++
    k--
}

while (start <= end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
}

console.log(nums)