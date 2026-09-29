let nums = [1, 2, 3]

let total = 0
for (let i = 0; i < nums.length; i++) {
    total += nums[i]
}

let leftsum = 0
let rightsum = 0
let index = -1
for (let i = 0; i < nums.length; i++) {
    rightsum = total - leftsum - nums[i]
    if (leftsum == rightsum) {
        index = i
        break
    }
    leftsum += nums[i]
}
console.log(index)