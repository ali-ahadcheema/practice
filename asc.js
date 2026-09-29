const arr = [5, 2, 8, 1, 9];

let smal = arr[0]
let index;
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] <= smal) {
    smal = arr[i]
    index = i
  }

}
let temp = arr[0]
arr[0] = arr[index]
arr[index] = temp

console.log(arr)