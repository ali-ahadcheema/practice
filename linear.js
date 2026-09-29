const arr = [8, 3, 6, 2, 9];

const check = 6
let result = false

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == check) {
        result = true
    }
}

console.log(result)