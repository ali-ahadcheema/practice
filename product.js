const arr = [2, 2, 3];

const result = []

for (let i = 0; i <= arr.length - 1; i++) {

    let current = arr[i]
    let product = 1;

    for (let j = 0; j <= arr.length - 1; j++) {
        if (j != i) {
            product = product * arr[j]
        }
    }

    result.push(product)

}

console.log(result)