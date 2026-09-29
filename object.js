let customers = "ababa"

let tally = {}
let max = 0;
let find = ""
for (let i = 0; i <= customers.length - 1; i++) {
    let current = customers[i]
    if (tally[current] === undefined) {
        tally[current] = 1
    }
    else {
        tally[current] = tally[current] + 1
    }
}

for (let key in tally) {
    if (tally[key] > max) {
        max = tally[key]
        find = key
    }
}
console.log(find)