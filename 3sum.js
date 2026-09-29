let arr = [-1, 0, 1, 2, -1, -4]

let read = 1
let write = 0

let result = []

while (read <= arr.length - 1) {
    let ans = Infinity
    if (write == 0) {
        write++
        read++
    }

    else if (arr[read] != arr[write] && arr[read] != arr[write - 1] && arr[write] != arr[write - 1]) {
        ans = arr[read] - arr[write] - arr[write - 1]
    }
    else {
        read++
        write++
    }

    if (ans == 0) {
        result.push([arr[read], arr[write], arr[write - 1]])
    }
}

console.log(result)