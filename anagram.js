let s = "ali"
let t = "lai"

let ans = false;
for (let i = 0; i <= s.length; i++) {
    let current = s[i]
    let check = false
    for (let j = 0; j <= t.length; j++) {
        if (t[j] == current) {
            check = true
        }
    }
    if (check) {
        ans = check
    }
    else {
        ans = check
        break
    }
}rr

console.log(ans)