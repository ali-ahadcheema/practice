

function check(k, s) {

    let left = 0
    let right = 0
    let maxi = 0
    let map = new Map()
    while (right <= s.length - 1) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        if (!map.has(s[right])) {
            while (k > 0) {
                if (!map.has(s[right])) {
                    map.set("A", map.get("A") + 1)
                    right++
                    k--
                }
                right++
            }
            left++
        }
        maxi = Math.max(maxi, right - left + 1)
        right++
    }
    console.log(maxi)

}
let s = "ABAB", k = 2
check(s, k)