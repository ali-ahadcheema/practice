let nums = [1, 2, 3, 4, 4, 3, 2, 1]
let n = 4

let result = []

let left = 0
let fast = n
while (left < n && fast <= nums.length) {
    let current = nums[left]
    result.push(current)
    result.push(nums[fast])
    left++
    fast++
}
console.log(result)

