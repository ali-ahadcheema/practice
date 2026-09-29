let s = "acb"
let t = "ahbgdc"

let left = 0

let check = false
let counter = 0;
for (let i = 0; i <= s.length - 1; i++) {
    let current = s[i]
    while (left < t.length) {

        if (current == t[left]) {
            counter++
            left++
            break
        }
        else if (left == t.length - 1) {
            break
        }
        else {
            left++
        }

    }

}

if (counter == s.length) {
    check = true
}
console.log(check)

