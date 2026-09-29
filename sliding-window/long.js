let s = "abbba"

let arr = s.split("")

let left = 0
let set = new Set()
let right = 0

let max = 0
let length = 0
while (right < arr.length) {
    if (!set.has(arr[right])) {
        set.add(arr[right])
        length = (right - left) + 1
        right++
    }
    else {
        set.delete(arr[left])
        left++
    }
    max = Math.max(max, length)
}

console.log(max)
