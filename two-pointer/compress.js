let char = ["a", "a", "b", "b", "c", "c", "c"]

let left = 0


let map = new Map()
let result = []
while (left <= char.length - 1) {

    let fast = left
    let count = 0
    while (fast <= char.length - 1 && char[left] == char[fast]) {
        count++
        fast++
    }

    if (!map.has(char[left])) {
        map.set(char[left], count)
        result.push(char[left], count)
    }
    left++

}
console.log(result)