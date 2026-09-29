let nums = [90]
let k = 1

nums.sort((a, b) => a - b)

let mini = Infinity
for (let i = 0; i < nums.length - k + 1; i++) {
    let current = nums[i + k - 1] - nums[i]
    mini = Math.min(mini, current)
}

console.log(mini)