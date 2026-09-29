let nums = [1, 0, 1]

let read = 0
let write = 0

let left = 0
let right = nums.length - 1

while (read <= right) {

    if (nums[read] != 0) {
        let temp = nums[write]
        nums[write] = nums[read]
        write++
        nums[read] = temp
    }
    read++
}

console.log(nums)