function products(arr) {
  let newArr = [];
  let product;

  for (let i = 0; i < arr.length; i++) {
    product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        product *= arr[j];
      }
    }
    newArr.push(product);
  }
  return newArr;
}

console.log(products([1, 3, 9, 4]));
