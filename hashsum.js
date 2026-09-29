const arr = [3, 2, 4]
const target = 6

const map = new Map()
let result = []
for (let i = 0; i <= arr.length - 1; i++) {
    let minus = target - arr[i]
    if (map.has(minus) || minus == arr[i]) {
        result.push([map.get(minus), i])
    }
    map.set(arr[i], i)

}

console.log(result)