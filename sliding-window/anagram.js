let s = "cbaebabacd"
let p = "abc"

let arr = p.split("")
let window = arr.length
let arr2 = s.split("")
let map1 = new Map()

for (let i = 0; i < arr.length; i++) {
    if (!map1.has(arr[i])) {
        map1.set(arr[i], 1)
    }
    else {
        map1.set(arr[i], map1.get(arr[i]) + 1)
    }
}

function issame(map1, map2) {
    if (map1.size != map2.size) {
        return false
    }

    for (let i of map1.keys()) {
        if (map1.get(i) != map2.get(i)) {
            return false
        }
    }
    return true
}
let map2 = new Map()
let left = 0
let result = []
for (let right = 0; right < arr2.length; right++) {
    map2.set(arr2[right], (map2.get(arr2[right]) || 0) + 1)
    if (right - left + 1 > window) {
        issame(map1, map2)
        map2.set(arr2[left], map2.get(arr2[left]) - 1)
        if (map2.get(arr2[left]) == 0) {
            map2.delete(arr2[left])
        }
        left++
    }

    if (right - left + 1 == window && issame(map1, map2)) {
        result.push(left)
    }
}

console.log(result)
