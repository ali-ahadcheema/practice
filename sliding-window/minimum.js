let nums = [1, 4, 4]
let target = 4

let left = 0
let right = 0


let window = nums[left]
let min = Infinity
while (right <= nums.length - 1) {
    let find = 0
    if (window < target) {
        right++
        window += nums[right]
        continue
    }
    else if (window >= target) {

        window -= nums[left]
        find = right - left + 1
        left++
    }
    min = Math.min(find, min)
}

console.log(min)
