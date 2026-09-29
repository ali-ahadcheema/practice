let arr = [-1, -2, -3]

let max = 0;
let half = arr.length / 2

for (let i = 0; i <= arr.length - 1; i++) {
    let max1 = 1;
    let max2 = 1;
    if (i < half) {
        max1 = arr[i] * max1
    }
    else if (i <= half) {
        max2 = arr[i] * max2
    }

    max = Math.max(max1, max2)
}

console.log(max)