let arr = [17]

let left = 0


let result = []

while (left < arr.length) {
    if (left == arr.length - 1) {
        result.push(-1)
        break
    }
    let fast = left + 1
    let max = 0
    while (fast < arr.length) {
        max = Math.max(arr[fast], max)
        fast++
    }
    result.push(max)
    left++
}

console.log(result)