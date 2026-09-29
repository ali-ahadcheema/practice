const arr = [1, 2, 3, 4];

const set = new Set()
let check = false
for (let i = 0; i <= arr.length - 1; i++) {
    if (set.has(arr[i])) {
        check = true
    }
    set.add(arr[i])
}

console.log(check)