let nums = [0, 1, 0, 3, 12]

let right = nums.length - 1
let left = 0

for (let i = 0; i <= nums.length - 1; i++) {

    let current = nums[i]
    while (left < right) {

        if (current < nums[right]) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
        }

    }
}