const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2, 4];

const result = []

for (let i = 0; i <= arr1.length - 1; i++) {

    let current = arr1[i]
    let check = true
    for (let k = 0; k <= result.length - 1; k++) {
        if (result[k] == current) {
            check = false
            break
        }
    }
    if (check) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            if (arr2[j] == current) {
                result.push(current)
                break
            }
        }
    }



}

console.log(result)