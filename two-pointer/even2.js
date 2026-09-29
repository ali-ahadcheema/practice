let nums = [4, 2, 6, 8, 9]

let even = 0
let odd = 1

while (even < nums.length && odd < nums.length) {
    if (nums[even] % 2 === 0) {
        even += 2
    }
    else if (nums[odd] % 2 != 0) {
        odd += 2
    }
    else {
        let temp = nums[even]
        nums[even] = nums[odd]
        nums[odd] = temp
        even += 2
        odd += 2
    }
}
console.log(nums)