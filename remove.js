let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

let map = new Map()
map.set(nums[0], 1)

let write = 0
let read = 1
while (read <= nums.length - 1) {
    if (!map.has(nums[read])) {
        write++
        nums[write] = nums[read]
        map.set(nums[read], 1)
    }
    else if (map.get(nums[read]) < 2) {
        write++
        nums[write] = nums[read]
        map.set(nums[read], map.get(nums[read]) + 1)
    }
    read++
}
console.log(nums)
console.log(write + 1)