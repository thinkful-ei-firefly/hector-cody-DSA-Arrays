const MyArray = require('./MyArray')

//2. Length = 6, Capacity = 6, MemoryAddress = 15
//3. Length = 3, Capacity = 6, MemoryAddress = 15
//   capacity and length are different because the difference of 3 still holds the old values
//   in memory but are not included in the array anymore.
//4. 

function main() {
  MyArray.SIZE_RATIO = 3

  let arr = new MyArray()

  arr.push(3)
  arr.push(5)
  arr.push(15)
  arr.push(19)
  arr.push(45)
  arr.push(10)

  arr.pop()
  arr.pop()
  arr.pop()

  console.log(arr)
  console.log(arr.get(0))

  while(arr.length>0){
    console.log(arr.length)
    arr.pop()
  }


  arr.push('tauhida')
  console.log(arr.get(0))

}

main()
