let s = "loveleetcode"

let map = {}

let check = false
let str = -1

for (let i = 0; i <= s.length - 1; i++) {
    let current = s[i]
    map[current] = (map[current] || 0) + 1
}

for (let j = 0; j <= s.length - 1; j++) {
    let current = s[j]
    if (current in map && !check && map[current] == 1) {
        str = j
        check = true
    }
    if (check) {
        break
    }
}


console.log(str)