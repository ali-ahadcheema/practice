let nums = [1, 12, -5, -6, 50, 3]

let k = 4

let window = 0
for (let i = 0; i < k; i++) {
    window += nums[i]
}

let average = window / k

for (let right = k; right < nums.length; right++) {
    window += nums[right]
    window -= nums[right - k]

    if (window / k > average) {
        average = window / k
    }

}

console.log(average)