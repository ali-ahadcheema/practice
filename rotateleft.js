const arr = [1, 2, 3, 4, 5];

let current = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (i == 0) {
        current = arr[i]
    }
    arr[i] = arr[i + 1]

    if (i == arr.length - 1) {
        arr[i] = current
    }
}

console.log(arr)