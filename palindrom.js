const arr = [1, 2, 3, 4, 1]

let last = arr.length - 1

let result = false

for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] == arr[last]) {
        result = true
        last--
    } else {
        result = false
        break
    }

}

console.log(result)