const arr = [0, 0, 0];


let maxcount = 0;
let max = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    let current = arr[i]
    if (current == 1) {
        max++
        maxcount = Math.max(max, maxcount)
    }
    else {
        break
    }

}
console.log(maxcount)