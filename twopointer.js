let arr = [1, 2, 2, 3, 3, 4]

let w = 0
let r = 1
let counter = 0
while (r < arr.length) {
    if (arr[w] == arr[r]) {
        r++
    }
    else {
        counter++
        w++
        arr[w] = arr[r]
        r++
    }
}

console.log(counter)