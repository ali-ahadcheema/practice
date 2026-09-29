const arr = [12, 7, 18, 3, 25];

let smal = arr[0]
let second = 0;

let temp = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < smal) {
        second = smal
        smal = arr[i]
    }
    else if (arr[i] < second) {t
        second = arr[i]
    }
}

console.log(second)