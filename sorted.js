const arr = [1, 2, 3, 4, 5];

let result = false
let last = arr.length - 1

for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] < arr[last]) {
        result = true
    }

}

console.log(result)