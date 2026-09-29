let nums = [7, 4, 3, 9, 1, 8, 5, 2, 6]
let k = 3


let windowsize = k * 2 + 1

let result = new Array(nums.length).fill(-1)

let window = 0
for (let i = 0; i < windowsize; i++) {
    window += nums[i]
}

result[k] = Math.floor(window / windowsize)

for (let right = windowsize; right < nums.length; right++) {
    window -= nums[right - windowsize]
    window += nums[right]

    let center = right - k
    result[center] = Math.floor(window / windowsize)

}
console.log(result)