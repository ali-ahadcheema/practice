let arr = [3, 2, 1]

let max = Infinity
let second = Infinity

for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] > second && arr[i] != max) {
        second = max
    }


}

console.log(second)