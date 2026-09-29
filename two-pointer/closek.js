let arr = [1, 1, 2, 3, 4, 5]
let k = 4
let x = -1

let left = 0

let result = []
let right = arr.length - 1
let min = 0
while (k > 0) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < x) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    k--
}
result = result.sort((a, b) => a - b)
console.log(result)