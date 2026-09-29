let customers = [1]
let grumpy = [0]
let minutes = 1

let sum = 0
for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] == 0) {
        sum += customers[i]
    }
}

let sum2 = 0
for (let i = 0; i < minutes; i++) {
    if (grumpy[i] == 0) {
        sum2 += 0
    }
    else {
        sum2 += customers[i]
    }
}

let left = 0
let max = sum2
let right = minutes
while (right < customers.length) {
    if (grumpy[right] === 0 && grumpy[left] === 1) {
        sum2 -= customers[left]
        right++
        left++
        continue
    }
    else if (grumpy[right] === 0 && !grumpy[left] === 1) {
        right++
        left++
        continue
    }
    else {
        sum2 += customers[right]
    }

    if (grumpy[left] == 1) {
        sum2 = sum2 - customers[left]
    }
    max = Math.max(sum2, max)
    right++
    left++
}
console.log(max + sum)


