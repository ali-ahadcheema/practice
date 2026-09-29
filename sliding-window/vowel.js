let arr = "abciiidef"
let s = arr.split("")
let k = 3

let window = 0
for (let i = 0; i < k; i++) {
    if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
        window++
    }

}

let max = window
for (let right = k; right < s.length; right++) {

    if (s[right] == "a" || s[right] == "e" || s[right] == "i" || s[right] == "o" || s[right] == "u") {
        window++
    }

    if (s[right - k] == "a" || s[right - k] == "e" || s[right - k] == "i" || s[right - k] == "o" || s[right - k] == "u") {
        window--
    }

    max = Math.max(max, window)

}

console.log(max)
