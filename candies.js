let candies = [2, 3, 5, 1, 3]
let extraCandies = 3

let result = []

let maxi = 0
for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxi) {
        maxi = candies[i]
    }
}

for (let i = 0; i < candies.length; i++) {
    let find = false
    let sum = extraCandies + candies[i]
    if (sum >= maxi) {
        find = true
        result.push(find)
    }
    else {
        result.push(find)
    }
}
console.log(result)