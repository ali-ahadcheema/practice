const arr = [-7, 1, 5, 2, -4, 3, 0]
let leftsum = 0;
let find = -1;
for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]
    let sum = 0;
    for (let j = i + 1; j <= arr.length - 1; j++) {
        sum += arr[j]
    }
    if (leftsum == sum) {
        find = i
        break
    }
    leftsum += current
}

console.log(find)