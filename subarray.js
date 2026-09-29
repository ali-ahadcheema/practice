let arr = [0]
let left = 0;
let right = arr.length - 1

let length = arr.length - 1
let result = []
while (left <= right) {
    let first = arr[left] * arr[left]
    let last = arr[right] * arr[right]

    if (first < last) {
        result[length] = last
        length--
        right--
        continue
    }
    else {
        result[length] = first
        length--
        left++
    }

}

console.log(result)
