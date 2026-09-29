let s = ""

let check = true

let right = s.length - 1
let left = 0

while (left < right) {
    let current = s[left].toLocaleLowerCase()
    let last = s[right].toLocaleLowerCase()

    if (current == "," || current == ":" || current == " ") {
        left++
        continue
    }
    else if (last == ":" || last == "," || last == " ") {
        right--
        continue
    }
    else if (current == last) {
        check = true
    }
    else {
        check = false
        break
    }
    left++
    right--
}

console.log(check)