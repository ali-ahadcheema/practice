let digits = [9]

let right = digits.length - 1
let result = []
while (right >= 0) {
    if (digits[right] != 9) {
        digits[right] += 1
        break
    }
    else {
        digits[right] = 0
        right--
    }
    if (right < 0) {
        digits.unshift(1)
    }
}
console.log(digits)