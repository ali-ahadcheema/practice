let nums = [1, 2, 3, 4]

let sum = 0
let left = 0
let result = []
while (left < nums.length) {
    sum += nums[left]
    result.push(sum)
    left++
}
console.log(result)