const arr = [2, 7, 11, 15];
const target = 9;

let result = []


for (let i = 0; i <= arr.length - 1; i++) {

    for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] + arr[j] == target) {
            result.push(arr[i], arr[j])
        }
    }
}

console.log(result)