let arr = [2, 3, 4]


let tar = 6
let left = 0;
let right = arr.length - 1
let result = []
while (left <= right) {
    if (arr[left] + arr[right] > tar) {
        right--
        continue
    }
    else if (arr[left] + arr[right] == tar) {
        left++
        right++
        result.push(left, right)
        break
    }
    else {
        left++
        continue
    }
}

console.log(result)