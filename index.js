const arr = [12, 20, 18, 19];

let larg = arr[0]
let second = 0

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > larg) {
        larg = arr[i]
        second = larg
        if (second < arr[i] || larg > arr[i]) {
            second = arr[i]
        }
    }
}

console.log(second)