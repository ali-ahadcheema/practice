let s = "paper"
let t = "titel"
let map = new Map()
let map2 = new Map()
let check = true
for (let j = 0; j <= s.length - 1; j++) {
    map.set(s[j], t[j])
    map2.set(t[j], s[j])
}

for (let i = 0; i <= s.length - 1; i++) {
    let current = s[i]
    let current2 = t[i]

    if (map.get(current) != current2) {
        check = false
        break
    }

    if (map2.get(current2) != current) {
        check = false
        break
    }
}
console.log(map)
console.log(map2)
console.log(check)