const arr = [1, 2, 1, 2, 3, 4];

let length = 0
for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]

    let count = 0;

    for (let j = i; j <= arr.length - 1; j++) {
        if (current <= arr[j]) {
            count++
            current = arr[j]
        } else {
            break
        }
    }
    if (length < count) {
        length = count
    }
}

console.log(length)