let nums = [-1, 2, 1, -4]
let target = 1

nums.sort((a, b) => a - b)
console.log(nums)
let find = Infinity
for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (right > left) {
        let sum = 0
        sum = nums[i] + nums[left] + nums[right]

        if (Math.abs(sum - target) < Math.abs(find - target)) {
            find = sum
        }

        if (sum < target) {
            left++
        }
        else if (sum > target) {
            right--
        }
        else {
            find = sum
            break
        }
    }
}

console.log(find)