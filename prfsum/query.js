
function query(nums, left, right) {


    let prefix = new Array(nums.length + 1)

    prefix[0] = 0

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i - 1]
    }

    let sum = prefix[right + 1] - prefix[left]
    console.log(sum)
}
query([2, 4, 6, 8, 10, 12], 1, 3)