let nums1 = [0, 0, 0, 0]
let m = 3
let n = 3
let nums2 = [2, 5, 6]

let left = nums2.length - 1
let k = (m + n) - 1

let first = m - 1
let second = n - 1
while (second >= 0) {

    if (nums2[second] > nums1[first]) {
        nums1[k] = nums2[second]
        k--
        second--
        continue
    }
    else {
        nums1[k] = nums1[first]
        k--
        first--
        continue
    }

}

console.log(nums1)
