function urlIfy(str) {
  const urlArr = str.split(' ')
  const url = urlArr.join('%20')
  console.log(url)
}

urlIfy('tauhida parveen')
