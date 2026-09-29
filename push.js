const arr = [1, 2, 2, 3, 4, 4, 5];

let result = []

for (let i = 0; i <= arr.length - 1; i++) {
    if (result == null) {
        result.push(arr[i])
    }

    for (let j = 0; i <= result.length - 1; j++) {
        if (result[j] == ar[i + 1]) {
            result.pop()
        }
    }
}

console.log(result)