const arr = [3, 6, 1, 0]

let max = Infinity
let result = -1;

for (let k = 0; k <= arr.length - 1; k++) {
    if (arr[k] > max) {
        max = arr[k]
        result = k
    }
}
let check = true
for (let j = 0; j <= arr.length - 1; j++) {
    let maxi = 2 * arr[j]
    if (arr[j] == max) {
        continue
    }
    if (max >= maxi) {
        check = true
    }
    else {
        check = false
        break
    }
}
if (!check) {
    result = -1
}


console.log(result)