// // Linear O(n), this is optimized

function maxSum(arr) {
  let currentMax = 0
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
    if (total > currentMax) {
      currentMax = total
    }
  }
  return currentMax
}

x = [4, 6, -3, 5, -2, 1]

const y = maxSum(x)

console.log(y)
