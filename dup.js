const arr = [1, 2, 3, 2, 4, 5, 1]

let result = []

let current;

let conti = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    current = arr[i]
    let found = false;
    for (let j = 0; j <= i; j++) {
        if (result[j] == current) {
            found = true
        }
    }
    if (!found) {
        result.push(current)
    }
}

console.log(result)