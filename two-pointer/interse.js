let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4]

let map = new Map()
let result = []
for (let i = 0; i <= nums1.length - 1; i++) {
    if (!map.has(nums1[i])) {
        map.set(nums1[i], 1)
    }
    else {
        map.set(nums1[i], map.get(nums1[i]) + 1)
    }
}

for (let i = 0; i <= nums2.length - 1; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
        result.push(nums2[i])
        map.set(nums2[i], map.get(nums2[i]) - 1)
    }
}

console.log(result)