const arr = [7, 1, 5, 3, 6, 4];

let min = arr[0];
let max = 0;
let index = 0
let profit = 0
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
        min = arr[i]
        index = i
    }
}

for (let j = index; j <= arr.length - 1; j++) {
    if (arr[j] > max) {
        max = arr[j]
    }
}

profit = max - min



console.log(profit)

