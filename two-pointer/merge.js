let nums1 = [2, 0]
let m = 1
let nums2 = [1]
let n = 1

let len = (m + n) - 1

let right1 = m - 1
let right2 = n - 1

if (right1 < 0) {
    nums1[len] = nums2
}

while (right2 >= 0) {
    if (nums1[right1] > nums2[right2]) {
        nums1[len] = nums1[right1]
        right1--
    }
    else {
        nums1[len] = nums2[right2]
        right2--
    }
    len--
}

console.log(nums1)