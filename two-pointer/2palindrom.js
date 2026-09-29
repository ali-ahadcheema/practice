let s = "abc"

let arr = s.split("")
let left = 0;
let right = s.length - 1

let find = false
let counter = 0
let check = false
while (left <= right) {

    if (arr[left] == arr[right]) {
        left++
        right--
        find = true
    }
    else if (arr[left] != arr[right]) {
        check = true
        break
    }

}

if (check) {
    while (left <= right) {
        if (arr[left + 1] == arr[right]) {
            find = true
            left++
            right--
        }
        else if (arr[left] == arr[right - 1]) {
            find = true
            left++
            right--
        }
        else {
            find = false
            break
        }
    }
}

console.log(find)