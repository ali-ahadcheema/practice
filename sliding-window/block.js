let blocks = "WBBWWBBWBW"
let k = 7

let arr = blocks.split("")

let window = 0
for (let i = 0; i < k; i++) {
    if (arr[i] == "W") {
        window++
    }
}

let mini = window

for (let j = k; j < arr.length; j++) {
    if (arr[j] == "W") {
        window++
    }
    if (arr[j - k] == "w") {
        window--
    }
    mini = Math.min(mini, window)
}

console.log(mini)
