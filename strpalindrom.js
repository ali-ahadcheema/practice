let str = "madam"

let last = str.length - 1
let check = false

for (let i = 0; i < str.length / 2; i++) {
    let current = str[i]
    if (current == str[last]) {
        check = true
        last--
    }
    else {
        break
    }

}

console.log(check)