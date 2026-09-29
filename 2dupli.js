let nums = [1, 1, 1, 2, 2, 3]

let write = 0
let read = 1

let second = Infinity
while (read <= nums.length - 1) {
    if (write == 0) {
        write++
        read++
        continue
    }
    else if (nums[read] == nums[write] && nums[read] == nums[write - 1]) {
        read++
        continue
    }
    else {
        write++
        nums[write] = nums[read]
    }
    read++
}

console.log(nums)