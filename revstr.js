let arr = ["h", "e", "l", "l", "o"];

let right = arr.length - 1

let left = 0

while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    right--
    left++
}

console.log(arr)