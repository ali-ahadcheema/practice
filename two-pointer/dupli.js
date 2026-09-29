let arr = [1, 0, 2, 3, 0, 4, 5, 0]

let w = 0
let s = 0
while (s < arr.length - 1) {
    if (arr[s] == 0) {
        w++
        s++
        let temp = arr[s]
        
        arr[w] = 0
    }
}