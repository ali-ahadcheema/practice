let arr = [2, 2, 2, 2, 5, 5, 5, 8]
let k = 3
let threshold = 4

let count = 0
let window = 0;
for (let i = 0; i < k; i++) {
    window += arr[i]
}

let average = window / k
if (average >= threshold) {
    count++
}

let max = 0
for (let right = k; right < arr.length; right++) {

    window += arr[right]
    window -= arr[right - k]

    if (window / k >= threshold) {
        max++
    }
    max = Math.max(max, count)

}

console.group(max)