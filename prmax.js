let arr = [1, 1, 1]

let max = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]
    let curmax = 0;
    for (let j = i + 1; j <= arr.length - 1; j++) {
        curmax = arr[j] * current
        if (curmax > max) {
            max = curmax
        }
    }
}

console.log(max)