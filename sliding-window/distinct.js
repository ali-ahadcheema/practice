let nums = [1, 5, 4, 2, 9, 9, 9]
let k = 3


function distinc(nums, k) {
    let sum = 0
    let left = 0
    let map = new Map()
    for (let i = 0; i < k; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        sum += nums[i]
    }


    let max = sum

    for (let right = k; right < nums.length; right++) {
        if (map.has(nums[right])) {
            map.set(nums[right], map.get(nums[right]) + 1)
        }
        else {
            map.set(nums[right], 1)
        }
        sum = (sum + nums[right]) - nums[left]

        if (map.has(nums[left])) {
            map.set(nums[left], map.get(nums[left]) - 1)
            if (map.get(nums[left]) == 0) {
                map.delete(nums[left])
            }
            left++
        }

        if (map.size === k) {

            max = Math.max(sum, max)
        }

    }
    console.log(max)
}

console.log(distinc(nums, k))
