let nums = [4, 2, 5, 1, 3, 6]
let right = 4
let left = 2
let pre = new Array(nums.length)

pre[0] = nums[0]
for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] + nums[i]
}

let sum = pre[right] - pre[left - 1]
console.log(sum)