const arr = [1, 0, 2, 0, 3, 4, 0];

let first = arr[0]
let result = []
let result2 = []


for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != 0) {
        result.push(arr[i])
    } else {
        result2.push(arr[i])
    }
}

const final = [...result, ...result2]

console.log(final)