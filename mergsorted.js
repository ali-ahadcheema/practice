const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

let result = []


for (let i = 0; i <= arr1.length - 1; i++) {
    let current = arr1[i]
    let push = 0;
    for (let j = 0; j <= arr2.length - 1; j++) {
        if (current < arr2[j]) {
            push = current
        }
        else {
            push = arr2[j]
        }
    }
    result.push(push)

}


console.log(result)