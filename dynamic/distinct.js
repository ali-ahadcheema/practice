let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 2

let left = 0
let right = 0


let length = 0
let map = new Map()
while (right < arr.length) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1)
    while (map.size > k) {
        map.set(arr[left], map.get(arr[left]) - 1)
        if (map.get(arr[left]) == 0) {
            map.delete(arr[left])
        }
        left++
    }
    length = Math.max(length, right - left + 1)
    right++
}
console.log(length)