

function trub(arr) {

    let left = 0
    let maxi = 0
    function getsign(arr1, arr2) {
        if (arr1 < arr2) {
            return 1
        }
        else if (arr1 > arr2) {
            return -1
        }
        else {
            return 0
        }
    }
    let previous = 0
    for (let right = 1; right < arr.length; right++) {
        let current = getsign(arr[right - 1], arr[right])

        if (current == 0) {
            left = right
            previous = 0
        }

        if (previous != current) {
            previous = current
            maxi = Math.max(maxi, right - left + 1)
        }
        else {
            previous = current
            left = right - 1
            maxi = Math.max(maxi, right - left + 1)
        }

    }
    console.log(maxi)

}


let arr = [9, 9]
trub(arr)


