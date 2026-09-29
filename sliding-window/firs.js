let arr = [2, 1, 5, 1, 3, 2]
let k = 3


let window = 0
for (let i = 0; i < k; i++) {
    window += arr[i]
}

let maxsum = window
for (let right = k; right < arr.length; right++) {

    window += arr[right]
    window -= arr[right - k]
    maxsum = Math.max(maxsum, window)
}

console.log(maxsum)
