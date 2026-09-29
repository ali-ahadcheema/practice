const arr = [1, 2, 3, 4, 2, 5];

let result = []
let find = []

let last = arr.length - 1

for (let i = 0; i <= arr.length - 1; i++) {
    result.push(arr[i])
    for (let j = 0; j <= result.length - 1; j++) {
        if (result[j] == arr[last]) {
            find = arr[i]
            last--
        }
    }
}

console.log(find)