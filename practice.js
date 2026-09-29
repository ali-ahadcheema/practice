let arr = [1, 0, 2, 0, 3]

let read = 0
let write = 0

while (read <= arr.length - 1) {
    if (arr[read] != 0) {
        let temp = arr[write]
        arr[write] = arr[read]
        arr[read] = temp
        write++
    }
    read++
}

console.log(arr)