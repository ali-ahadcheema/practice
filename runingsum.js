const arr = [1, 2, 3, 4];

const result = []

let current = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    current += arr[i]
    result.push(current)
}

console.log(result)