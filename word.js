
let j = "jquery"

let w = j.split(" ")
console.log(w)

let s = "dog cat fish dog"
let word = s.split(" ")

let petren = "abba"

let map = new Map()
let map2 = new Map()
let check = true
for (let i = 0; i <= word.length - 1; i++) {
    map.set(word[i], petren[i])
    map2.set(petren[i], word[i])
}

for (let i = 0; i <= word.length - 1; i++) {

    let pet = petren[i]
    let word2 = word[i]
    if (map.get(word2) != pet) {
        check = false
        break
    }

    if (map2.get(pet) != word2) {
        check = false
        break
    }
}

console.log(map)
console.log(map2)
console.log(check)