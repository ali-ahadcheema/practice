let nums2 = [1, 2]
let nums1 = [1, 2, 2, 1]

let result = []

let set = new Set(nums2)
let previous = 0;
let set2 = new Set()
for (let i = 0; i <= nums1.length - 1; i++) {
    let current = nums1[i]

    if (set.has(current) && !set2.has(current)) {
        result.push(current)
        set2.add(current)
    }
}
console.log(result)
