let s = "ab#c"
let t = "ad#c"

let arr1 = s.split("")
let arr2 = t.split("")

let w = 0
let scaner = 0
let right = arr1.length - 1
while (scaner <= right) {
    if (arr1[scaner] != "#") {
        arr1[w] = arr1[scaner]
        w++
        scaner++
    }
    else {
        if (w > 0) {
            w--
            scaner++
        }
        else {
            scaner++
        }
    }
}

console.log(arr1)
let w2 = 0
let scaner2 = 0
while (scaner2 <= arr2.length - 1) {
    if (arr2[scaner2] != "#") {
        arr2[w2] = arr2[scaner2]
        w2++
        scaner2++
    }
    else {
        if (w2 > 0) {
            w2--
            scaner2++
        }
        else {
            scaner2++
        }
    }
}

arr1 = arr1.splice(0, w)
arr2 = arr2.splice(0, w2)

let find = false
if (arr1.join("") === arr2.join("")) {
    find = true
}
console.log(find)