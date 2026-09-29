let s = "abcabcbb"

let arr = s.split("")

let left = 0;
let right = 0

let set = new Set()

let max = 0
let find = 0
while (right < arr.length) {
    if (!set.has(arr[right])) {
        set.add(arr[right])
        right++
    }
    else {
        set.delete(arr[left])
        left++
    }

    let max = right - left
    find = Math.max(max, find)
}

console.log(find)