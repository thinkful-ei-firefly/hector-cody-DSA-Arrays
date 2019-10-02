function twoDArray(arr) {
  let newArr = [[], [], [], [], []];

  for (let row = 0; row < arr.length; row++) {
    let tempArr = arr[row];
    // console.log(arr[row]);
    for (let col = 0; col < arr.length; col++) {
      //  console.log(tempArr[col]);
      if (tempArr[col] === 0) {
        newArr[row].push(0);
        //console.log(newArr);
      }
    }
  }
  return newArr;
}

console.log(
  twoDArray([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);
