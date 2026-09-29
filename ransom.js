let ransomNote = "aa"
let magazine = "aa"

let map = new Map()
let check = true
for (let i = 0; i <= ransomNote.length - 1; i++) {
    let current = ransomNote[i]
    map.set(current, (map.get(current) || 0) + 1)
}

for (let j = 0; j <= magazine.length - 1; j++) {
    let current = magazine[j]
    map.set(current, map.get(current) - 1)
}

for (let keys of map.keys()) {
    if (map.get(keys) != 0) {
        check = false
    }
}

console.log(check)

