let str = "aabb"

let find = -1

for (let i = 0; i <= str.length; i++) {
    let current = str[i]
    let count = 0;
    let check = false
    for (let j = 0; j < str.length; j++) {
        if (current == str[j]) {
            count++

        }
    }
    if (count == 1) {
        find = current
        break
    }

}
console.log(find)