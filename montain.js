const arr = [2, 1, 4, 7, 3, 2, 5];

let result = 0;
for (let i = 0; i <= arr.length - 1; i++) {

    let previous = arr[i]
    let count = 1;
    let check = true
    let up = false
    for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[j] > previous) {
            count++
            previous = arr[j]
            check = true
            up = true
        }
        else if (check && arr[j] < previous && up) {
            previous = arr[j]
            count++
            check = false
        }

        else if (!check && arr[j] < previous) {
            count++
            break
        }


    }
    if (result < count) {
        result = count
    }
}

console.log(result)