let str = "leetcode"

let arr = str.split("")
let left = 0
let right = str.length - 1

while (left < right) {
    if (arr[left] != "a" && arr[left] != "e" && arr[left] != "i" && arr[left] != "o" && arr[left] != "u") {
        left++
        continue
    }
    else if (arr[right] != "a" && arr[right] != "e" && arr[right] != "i" && arr[right] != "o" && arr[right] != "u") {
        right--
        continue
    }
    else {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
    left++
    right--
}

arr.join()

console.log(arr)