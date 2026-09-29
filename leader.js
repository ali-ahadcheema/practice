const arr = [16, 17, 4, 3, 5, 2];

const result = []

let leader = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    leader = i
    let check = true
    for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[j] > arr[leader]) {
            check = false
            break
        }
    }
    if (check) {
        result.push(arr[leader])
    }
}

console.log(result)