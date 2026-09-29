let s = "aababcabc"
let arr = s.split("")
let k = 3


let left = 0
let count = 0
for (let i = 0; i < arr.length - k; i++) {
    let set = new Set()
    set.add(arr[i])
    set.add(arr[i + 1])
    set.add(arr[i + 2])
    if (set.size == k) {
        count++
    }
}

console.log(count)