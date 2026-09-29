let arr = [9, 9, 9]

let printed = []
let find = -1

for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]
    let check = true
    let frq = 0;
    for (let k = 0; k <= printed.length - 1; k++) {
        if (printed[k] == current) {
            check = false
            break
        }
    }
    if (check) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] == current) {
                frq++
            }
        }
        printed.push(current)
    }
    if (frq == 1) {
        find = current
        break
    }


}
console.log(find)