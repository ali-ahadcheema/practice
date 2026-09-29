let nums = [1, 2, 3, 4]

let result = []
for (let i = 0; i < nums.length; i++) {
    let left = 0
    let sum = 1
    while (left < nums.length) {
        if (left != i) {
            sum *= nums[left]
        }
        left++
    }
    result.push(sum)
}
console.log(result)