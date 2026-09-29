let g = [1, 2, 3]
let s = [1, 1]

let arr1 = s.sort((a, b) => a - b)
let arr2 = g.sort((a, b) => a - b)
let count = 0
let left = 0
let right = 0

while (left < arr1.length && right < arr2.length) {
    if (arr1[left] >= arr2[right]) {
        count++
        left++
        right++
    } else {
        left++
    }
}
console.log(count)

