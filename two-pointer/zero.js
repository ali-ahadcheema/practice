let arr = [1, 0, 2, 3, 0, 4, 5, 0]

let left = 0
let fast = 1
let right = arr.length - 1
while (fast <= right) {
    if (arr[fast] != 0) {
        let tem = arr[fast]
        arr[fast] = arr[left]
        arr[left] = tem
        left++
        fast++
    }
    else {
        fast++
    }
}

console.log(arr)