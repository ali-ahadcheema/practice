let firstList = [[0, 2], [5, 10], [13, 23], [24, 25]]
let secondList = [[1, 5], [8, 12], [15, 24], [25, 26]]

let result = []
let i = 0
let j = 0

while (i < firstList.length && j < secondList.length) {
    let maxi = Math.max(firstList[i][0], secondList[j][0])
    let mini = Math.min(firstList[i][1], secondList[j][1])


    if (maxi <= mini) {
        result.push([maxi, mini])
    }

    if (firstList[i][1] < secondList[j][1]) {
        i++
    }
    else {
        j++
    }
}
console.log(result)