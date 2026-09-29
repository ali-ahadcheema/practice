let arr = [2, 1, 5, 1, 3, 2]
let k = 3

let sum = 0
let left = 0
for (let i = 0; i < k; i++) {
    sum += arr[i]
}
let ans = sum

for (let right = k; right < arr.length; right++) {
    sum = (sum - arr[left]) + arr[right]
    left++
    ans = Math.max(sum, ans)
}
console.log(ans)