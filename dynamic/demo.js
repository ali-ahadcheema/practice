let nums1 = [0]
let m = 0
let nums2 = [1]
let n = 1

let length1 = (m + n) - 1

let right2 = n - 1
let right1 = m - 1
while (length1 >= 0) {
    if (right2 >= 0 && (right1 < 0 || nums2[right2] > nums1[right1])) {
        nums1[length1] = nums2[right2]
        right2--
        length1--
    }
    else {
        nums1[length1] = nums1[right1]
        right1--
        length1--
    }
}
console.log(nums1)