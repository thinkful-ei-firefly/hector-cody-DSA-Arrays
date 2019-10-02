function mergeArrays(arrX, arrY) {
  const newArr = []
  let i1 = 0
  let i2 = 0
  let currIndex = 0

  while (currIndex < (arrX.length + arrY.length)) {

    let arrxDone = i1 >= arrX.length;
    let arryDone = i2 >= arrY.length;

    let  arrxVal = arrX[i1]
    let arryVal = arrY[i2]

    if (!arrxDone && (arryDone || arrxVal < arryVal)) {
      newArr[currIndex] = arrxVal
      i1++
    } else {
      newArr[currIndex] = arryVal
      i2++
    }

    currIndex++
  }

  return newArr
}

const arrX = [1, 3, 6, 8, 11]
const arrY = [2, 3, 5, 8, 9, 10]

const x = mergeArrays(arrX, arrY)
console.log('NEW ARRAY')
x.forEach(num => {
  console.log(num)
})
