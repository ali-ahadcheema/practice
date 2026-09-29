const arr = [1, 2, 2, 3, 4, 4, 5];

let result = []


for (let i = 0; i <= arr.length - 1; i++) {

    let current = arr[i]
    let check = true
    for (let j = 0; j <= result.length - 1; j++) {
        if (result[j] == current) {
            check = false
            break
        }
    }   
    if (check) {
        result.push(current)
    }
}

console.log(result)