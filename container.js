let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

let left = 0
let right = arr.length - 1
let max = 0

while (left < right) {
    let less = 0
    let multi = 1
    if (arr[left] < arr[right]) {
        less = arr[left]
        multi = less * (right - left)
        left++
    }
    else {
        less = arr[right]
        multi = less * (right - left)
        right--
    }


    max = Math.max(multi, max)


}

console.log(max)