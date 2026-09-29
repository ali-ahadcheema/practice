let haystack = "hello"
let needle = "ll"

let size = needle.length
let index = -1
for (let i = 0; i < haystack.length; i++) {
    let current = haystack.slice(i, size + i)
    if (current === needle) {
        index = i
        break
    }

}
console.log(index)