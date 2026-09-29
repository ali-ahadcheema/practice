let people = [1, 1, 3], limit = 3

people = people.sort((a, b) => a - b)
console.log(people)
let left = 0
let right = people.length - 1
let count = 0

while (right >= left) {
    if (people[right] == limit) {
        count++
        right--
    }
    else if (people[left] + people[right] <= limit) {
        count++
        left++
        right--
    }
    else if (people[left] + people[right] > limit) {
        count++
        right--
    }
    else if (people[right] < limit) {
        count++
        right--
    }
}
console.log(count)