let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

let left = 0
let right = height.length - 1

let max = 0
while (left <= right) {
    let find = 0
    let less = 0
    if (height[left] < height[right]) {
        less = height[left]
        find = (right - left) * less
        left++
    }
    else {
        less = height[right]
        find = (right - left) * less
        right--
    }
    max = Math.max(max, find)
}

console.log(max)