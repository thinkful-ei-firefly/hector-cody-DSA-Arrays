// Linear O(n), this is optimized, if it was ordered could do O(log(n))


function filterArray(arr){
  const newArr = []
  for(let i in arr){
    if(arr[i] < 5){
      newArr.push(arr[i])
    }
  }
  return newArr
}

const x = [2, 3, 5, 1, 6, 8, 3]

const y = filterArray(x)

console.log(y)