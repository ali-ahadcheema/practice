const arr = [1, 2, 2, 3, 1];
let printed = []

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
        console.log(current, "frq", frq)
    }


}
