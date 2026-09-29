const arr = [1, 2, 3, 4];

const result = []

let find = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]
    let check = true

    for (let j = 0; j <= result.length - 1; j++) {
        if (result[j] == current) {
            check = false
        }
    }
    if (check) {
        result.push(current)
        find = current
    }
    if (!check) {
        find = -1
    }


}

console.log(result)
console.log(find)