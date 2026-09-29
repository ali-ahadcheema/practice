let arr = [-5, -3, -2, -1]

for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i] * arr[i]
    arr[i] = current
}

console.log(arr)

let left = 0
let right = arr.length - 1

let p = arr.length - 1
let result = new Array(arr.length)
while (left <= right) {
    if (arr[left] < arr[right]) {
        result[p] = arr[right]
        right--
    }
    else {
        result[p] = arr[left]
        left++
    }
    p--
}

console.log(result)