const arr = [2, 2, 1, 1, 1, 2, 2];

let senodmax = 0
let find = 0;
for (let i = 0; i <= arr.length - 1; i++) {

    let current = arr[i]
    let max = 0;
    let check = true
    for (let j = 0; j <= arr.length - 1; j++) {
        if (arr[j] == current) {
            max += 1;
        }
    }
    if (max > arr.length / 2) {
        find = current
        break
    } else {
        find = -1
    }



}

console.log(find)