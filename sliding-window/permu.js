let s1 = "ab"
let s2 = "eidboaoo"

let arr1 = s1.split("")
let arr2 = s2.split("")

let map1 = new Map()
let left = 0
while (left < arr1.length) {
   if (!map1.has(arr1[left])) {
      map1.set(arr1[left], 1)
   }
   else {
      map1.set(arr1[left], map1.get(arr1[left]) + 1)
   }
   left++
}

let right = 0
let map2 = new Map()
while (right < arr2.length) {
   if (!map2.has(arr2[right])) {
      map2.set(arr2[right], 1)
   }
   else {
      map2.set(arr2[right], map2.get(arr2[right]) + 1)
   }
   right++
}


let check = 0
let find = true

for (let keys of map1.keys()) {
   if (map1.has(keys) === map2.has(keys) && map1.get(keys) == map2.get(keys)) {
      find = true
   }
   else {
      find = false
      break
   }
}

console.log(find)
