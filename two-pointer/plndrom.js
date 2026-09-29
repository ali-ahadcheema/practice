let words = ["abc", "car", "ada", "racecar", "cool"]

let find = false
let ans = false
for (let i = 0; i <= words.length - 1; i++) {
    let current = words[i].split("")
    let left = 0
    let right = current.length - 1
    while (left <= right) {
        if (current[left] == current[right]) {
            find = true
            left++
            right--
        }
        else {
            break
        }

        if (left == right && find == true) {
            ans = true
        }
    }
}
console.log(ans)