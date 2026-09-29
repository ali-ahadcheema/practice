let arr = [2, 1, 5, 2, 3, 2]
let target = 7

let left = 0
let right = 0

let sum = 0
let length = Infinity
while (right < arr.length) {
    sum += arr[right]
    if (sum >= target) {
        while (left < arr.length) {
            sum -= arr[left]
            length = Math.min(length, right - left + 1)
            left++
            if (sum < target) {
                break
            }
        }
    }

    right++
}
console.log(length)